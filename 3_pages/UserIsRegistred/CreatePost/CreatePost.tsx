import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import {useTheme} from '../../../7_shared/hooks/useTheme';
import {getStyles} from './styles';
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native';
import {LeftArrowButton} from '../../../7_shared/UI/buttons/iconButtons/svgsButtons/leftArrowButton/LeftArrowButton';
import SvgBigXmark from '../../../../--no-index/big-xmark';
import Upload from '../../../7_shared/UI/upload/Upload';
import * as yup from 'yup';
import {Controller, useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {Input} from '../../../7_shared/UI/TextInput/TextIntput';
import {BigButton} from '../../../7_shared/UI/buttons/bigButton/BigButton';
import {usePaginationMyPosts} from '../MyPosts/model';
import fileApi from '../../../7_shared/api/axios';
import {usePostCreate} from '../../../__generated__/PostCreate';
type FormDataType = yup.InferType<typeof schema>;
type mediaUrlType = {
  fileName: string;
  data: Blob;
};
const schema = yup.object({
  title: yup.string().required().min(5),
  description: yup.string().required().min(40),
  mediaUrl: yup.mixed<mediaUrlType>().required(),
});
export default function CreatePost() {
  const styles = useTheme(getStyles);
  const navigation: NavigationProp<ParamListBase> = useNavigation();
  const [createPost] = usePostCreate();

  const {getPosts} = usePaginationMyPosts();
  const {...methods} = useForm<FormDataType>({
    resolver: yupResolver(schema),
    mode: 'onTouched',
    reValidateMode: 'onChange',
  });
  const onSubmit = async ({title, description, mediaUrl}: FormDataType) => {
    const responseLink = await fileApi.getUploadLink(
      mediaUrl.fileName,
      'POSTS',
    );
    const link = responseLink.data;
    await fileApi.uploadImage(link, mediaUrl.data);
    const mediaUrlLink = link.split('?')[0];
    createPost({
      variables: {
        input: {
          title,
          description,
          mediaUrl: mediaUrlLink,
        },
      },
    }).then(() => {
      getPosts();
      navigation.goBack();
    });
  };
  return (
    <View style={styles.createPost}>
      <ScrollView>
        <View style={styles.topMenu}>
          <LeftArrowButton onPress={() => navigation.goBack()} />
          <Text style={styles.pageName}>Create post</Text>
          <SvgBigXmark color={styles.Xmark.color} />
        </View>
        <View style={styles.uploadZone}>
          <Controller
            control={methods.control}
            name="mediaUrl"
            render={({}) => <Upload setValue={methods.setValue} />}
          />
        </View>

        <Controller
          control={methods.control}
          name="title"
          render={({field: {onBlur, onChange, value}}) => (
            <Input
              name="title"
              label="Title"
              placeholder="Enter title of post"
              onBlur={onBlur}
              onChange={onChange}
              value={value}
              isPassword={false}
              isActive={
                methods.getValues('title') && !methods.formState.errors.title
                  ? true
                  : false
              }
            />
          )}
        />

        <Controller
          control={methods.control}
          name="description"
          render={({field: {onBlur, onChange, value}}) => (
            <Input
              name="post"
              label="Post"
              placeholder="Enter your post"
              onBlur={onBlur}
              onChange={onChange}
              value={value}
              isPassword={false}
              isError={methods.formState.errors.description ? true : false}
              isActive={
                methods.getValues('description') &&
                !methods.formState.errors.description
                  ? true
                  : false
              }
            />
          )}
        />
        {methods.formState.errors.description && (
          <Text style={styles.errrorMesage}>
            A long post should be more than 40 words
          </Text>
        )}
        <View style={styles.submitButton}>
          <BigButton
            name="Publish"
            disabled={!methods.formState.isValid}
            onPress={methods.handleSubmit(onSubmit)}
          />
        </View>
      </ScrollView>
    </View>
  );
}
