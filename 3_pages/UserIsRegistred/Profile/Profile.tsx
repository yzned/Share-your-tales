import {View, Text, ScrollView, Modal} from 'react-native';
import React, {useState} from 'react';
import {useTheme} from '../../../7_shared/hooks/useTheme';
import {getStyles} from './styles';
import {LeftArrowButton} from '../../../7_shared/UI/buttons/iconButtons/svgsButtons/leftArrowButton/LeftArrowButton';
import GreenLink from '../../../7_shared/UI/greenLink/GreenLink';
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native';
import {PhotoButton} from '../../../7_shared/UI/buttons/iconButtons/photoButton/PhotoButton';
import * as yup from 'yup';
import {Controller, useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {GenderType, PostFilterType} from '../../../7_shared/types/api-types';
import {Input} from '../../../7_shared/UI/TextInput/TextIntput';
import {GenderRadioButtonGroup} from '../../../5_widgets/RadioButtonGroups/GenderRadioButtonGroup';
import {CustomDatePicker} from '../../../7_shared/UI/DatePicker/CustomDatePicker';
import fileApi from '../../../7_shared/api/axios';
import {usePosts} from '../../../__generated__/GetPosts';
import {useGetUser} from '../../../__generated__/GetUserData';
import {useUserEditProfile} from '../../../__generated__/UserEditProfile';

type postsInputTypes = {
  afterCursor: string;
  limit: number;
  type: PostFilterType;
};
type mediaUrlType = {
  fileName: string;
  data: Blob;
};
type FormDataType = yup.InferType<typeof schema>;

const schema = yup.object({
  firstName: yup.string(),
  lastName: yup.string(),
  middleName: yup.string(),
  gender: yup.string().oneOf(Object.values(GenderType)),
  birthDate: yup.string(),
  email: yup.string().email(),
  phone: yup.string().matches(/^\+(.*)$/, 'Phone number must start with +'),
  country: yup.string(),
  avatarUrl: yup.mixed<mediaUrlType>(),
});

export const Profile = () => {
  const styles = useTheme(getStyles);
  const inputData = {
    afterCursor: '',
    limit: 10,
    type: PostFilterType.New,
  } as postsInputTypes;
  const {refetch: refetchPosts} = usePosts({variables: {input: inputData}});
  const {data: userData, refetch} = useGetUser();
  const [updateUser] = useUserEditProfile();

  const navigation: NavigationProp<ParamListBase> = useNavigation();
  const [dateModalVisible, setDateModalVisible] = useState(false);
  const {...methods} = useForm<FormDataType>({
    resolver: yupResolver(schema),
    mode: 'onTouched',
    reValidateMode: 'onChange',
  });

  const onSubmit = async ({
    firstName,
    lastName,
    middleName,
    gender,
    birthDate,
    email,
    phone,
    country,
    avatarUrl,
  }: FormDataType) => {
    if (email === undefined || email === null) {
      email = userData?.userMe.email;
    }
    let mediaUrlLink = '';
    if (avatarUrl !== undefined) {
      const responseLink = await fileApi.getUploadLink(
        avatarUrl?.fileName,
        'POSTS',
      );
      const link = responseLink.data;
      await fileApi.uploadImage(link, avatarUrl?.data);
      mediaUrlLink = link.split('?')[0];
    } else {
      mediaUrlLink = userData?.userMe.avatarUrl;
    }
    updateUser({
      variables: {
        input: {
          firstName,
          lastName,
          middleName,
          gender,
          birthDate,
          email,
          phone,
          country,
          avatarUrl: mediaUrlLink,
        },
      },
    }).then(() => {
      refetch();
      refetchPosts();
      navigation.goBack();
    });
  };
  return (
    <View style={styles.profile}>
      <ScrollView>
        <View style={styles.topMenu}>
          <LeftArrowButton onPress={() => navigation.goBack()} />
          <Text style={styles.pageName}>Profile</Text>
          <GreenLink text="Done" onPress={methods.handleSubmit(onSubmit)} />
        </View>
        <View style={styles.userIcon}>
          <Controller
            control={methods.control}
            name="avatarUrl"
            render={({}) => <PhotoButton setValue={methods.setValue} />}
          />
        </View>
        <View style={styles.rubric}>
          <Text style={styles.rubricName}>Personal Info</Text>

          <Controller
            control={methods.control}
            name="firstName"
            render={({field: {onBlur, onChange, value}}) => (
              <Input
                name="firstName"
                defaultValue={
                  userData?.userMe.firstName != null
                    ? userData?.userMe.firstName
                    : ''
                }
                label="First name"
                placeholder="Enter your first name"
                onBlur={onBlur}
                onChange={onChange}
                value={value}
                isError={methods.formState.errors.firstName ? true : false}
                isPassword={false}
                isActive={
                  methods.getValues('firstName') &&
                  !methods.formState.errors.email
                    ? true
                    : false
                }
              />
            )}
          />

          <Controller
            control={methods.control}
            name="lastName"
            render={({field: {onBlur, onChange, value}}) => (
              <Input
                name="lastName"
                label="Last name"
                placeholder="Enter your last name"
                defaultValue={
                  userData?.userMe.lastName != null
                    ? userData?.userMe.lastName
                    : ''
                }
                onBlur={onBlur}
                onChange={onChange}
                value={value}
                isPassword={false}
                isActive={
                  methods.getValues('lastName') &&
                  !methods.formState.errors.email
                    ? true
                    : false
                }
              />
            )}
          />

          <Controller
            control={methods.control}
            name="middleName"
            render={({field: {onBlur, onChange, value}}) => (
              <Input
                name="surname"
                label="Surname"
                placeholder="Enter your surname"
                defaultValue={
                  userData?.userMe.middleName != null
                    ? userData?.userMe.middleName
                    : ''
                }
                onBlur={onBlur}
                onChange={onChange}
                value={value}
                isPassword={false}
                isActive={
                  methods.getValues('middleName') &&
                  !methods.formState.errors.email
                    ? true
                    : false
                }
              />
            )}
          />
          <Controller
            control={methods.control}
            name="email"
            render={({field: {onBlur, onChange, value}}) => (
              <Input
                name="email"
                label="Email"
                placeholder="Enter your e-mail"
                onBlur={onBlur}
                onChange={onChange}
                value={value}
                defaultValue={
                  userData?.userMe.email != null ? userData?.userMe.email : ''
                }
                isError={methods.formState.errors.email ? true : false}
                isPassword={false}
                isActive={
                  methods.getValues('email') && !methods.formState.errors.email
                    ? true
                    : false
                }
              />
            )}
          />
        </View>
        <View style={styles.rubric}>
          <Text style={styles.rubricName}>Gender</Text>
          <Controller
            control={methods.control}
            name="gender"
            render={({field: {onChange, value}}) => (
              <GenderRadioButtonGroup
                onChange={onChange}
                value={value}
                defaultValue={userData?.userMe.gender}
              />
            )}
          />
        </View>
        <View style={styles.rubric}>
          <Text style={styles.rubricName}>Date of birth</Text>
          <Controller
            control={methods.control}
            name="birthDate"
            render={({field: {onBlur, onChange, value}}) => (
              <View>
                <Input
                  name="birthDate"
                  onPress={() => setDateModalVisible(true)}
                  label="B-Day"
                  placeholder="Select bate of birth"
                  onBlur={onBlur}
                  value={value}
                  onChange={onChange}
                  defaultValue={
                    userData?.userMe.birthDate != null
                      ? userData?.userMe.birthDate
                      : ''
                  }
                  isPassword={false}
                  editable={false}
                  isActive={
                    methods.getValues('birthDate') &&
                    !methods.formState.errors.birthDate
                      ? true
                      : false
                  }
                />
                <Modal
                  visible={dateModalVisible}
                  onRequestClose={() => {
                    setDateModalVisible(!dateModalVisible);
                  }}
                  transparent={true}>
                  <CustomDatePicker
                    setDateModalVisible={setDateModalVisible}
                    onChange={onChange}
                  />
                </Modal>
              </View>
            )}
          />
        </View>

        <View>
          <Controller
            control={methods.control}
            name="phone"
            render={({field: {onBlur, onChange, value}}) => (
              <Input
                name="phone"
                label="Phone number"
                placeholder="Enter your phone number"
                onBlur={onBlur}
                onChange={onChange}
                value={value}
                defaultValue={
                  userData?.userMe.phone != null ? userData?.userMe.phone : ''
                }
                isPassword={false}
                isActive={
                  methods.getValues('phone') && !methods.formState.errors.phone
                    ? true
                    : false
                }
              />
            )}
          />
          {methods.formState.errors.phone && (
            <Text>{methods.formState.errors.phone.message}</Text>
          )}
        </View>
        <View style={styles.rubric}>
          <Text style={styles.rubricName}>Account Info</Text>
          <Controller
            control={methods.control}
            name="country"
            render={({field: {onBlur, onChange, value}}) => (
              <Input
                name="country"
                defaultValue={
                  userData?.userMe.country != null
                    ? userData?.userMe.country
                    : ''
                }
                label="Country"
                placeholder="Enter your country"
                onBlur={onBlur}
                onChange={onChange}
                value={value}
                isPassword={false}
                isActive={
                  methods.getValues('country') &&
                  !methods.formState.errors.country
                    ? true
                    : false
                }
              />
            )}
          />
        </View>
      </ScrollView>
    </View>
  );
};
