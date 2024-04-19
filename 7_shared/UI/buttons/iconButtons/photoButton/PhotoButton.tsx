import {Pressable, PressableProps, View} from 'react-native';
import React, {FC, useState} from 'react';
import {useTheme} from '../../../../hooks/useTheme';
import SvgCamera from '../../../../../../--no-index/camera';
import {getStyles} from './style';
import {UseFormSetValue} from 'react-hook-form';
import {
  ImagePickerResponse,
  launchImageLibrary,
} from 'react-native-image-picker';
import {BigUserIcon} from '../../../userIcons/bigUserIcon';
import {useGetUser} from '../../../../../__generated__/GetUserData';
type ClosedButtonProps = {
  setValue: UseFormSetValue<any>;
} & PressableProps;

export const PhotoButton: FC<ClosedButtonProps> = ({disabled, setValue}) => {
  const styles = useTheme(getStyles);
  const [pressed, setPressed] = useState(false);
  const [uploadData, setUploadData] = useState<null | string>(null);
  const {data} = useGetUser();
  const handleIconColor = () => {
    if (pressed) {
      return styles.pressedIcon.color;
    }
    if (disabled) {
      return styles.disabledIcon.color;
    }
    return styles.initialIcon.color;
  };

  const handleChangeAvatar = async (data: ImagePickerResponse) => {
    if (data.assets && data.assets[0].uri) {
      const resp = await fetch(data.assets[0].uri);
      const blob = await resp.blob();
      setValue('avatarUrl', {
        fileName: data.assets[0].fileName,
        data: blob,
      });
      setUploadData(data.assets[0].uri);
    }
  };

  const handleChoosePhoto = async () => {
    launchImageLibrary({mediaType: 'photo'}, response => {
      handleChangeAvatar(response);
    });
  };
  return (
    <View style={styles.avatarPhoto}>
      {uploadData ? (
        <BigUserIcon pathToIcon={uploadData} />
      ) : (
        <BigUserIcon pathToIcon={data?.userMe.avatarUrl} />
      )}
      <Pressable
        style={[
          styles.initialStyles,
          pressed && styles.pressedButton,
          disabled && styles.disabledButton,
        ]}
        onPressIn={() => {
          setPressed(true);
        }}
        onPressOut={() => {
          setPressed(false);
        }}
        onPress={handleChoosePhoto}
        disabled={disabled}>
        <View>
          <SvgCamera color={handleIconColor()} />
        </View>
      </Pressable>
    </View>
  );
};
