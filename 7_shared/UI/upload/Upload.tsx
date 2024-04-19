import { View, Text, Pressable, PressableProps, Image } from 'react-native'
import React, { useContext, useState } from 'react'

import { useTheme } from '../../hooks/useTheme'
import { getStyles } from './style'
import SvgUploadLight from '../../../../--no-index/border'
import { ImagePickerResponse, launchImageLibrary } from 'react-native-image-picker';
import { ThemeContext } from '../../theme/theme.context'
import SvgUploadDark from '../../../../--no-index/upload-dark'
import { UseFormSetValue } from 'react-hook-form'

type PropsType = PressableProps & {
  setValue: UseFormSetValue<any>;
};
export default function Upload({setValue}:PropsType) {
  const styles = useTheme(getStyles);
  const currentTheme = useContext(ThemeContext);
  const [uploadData, setUploadData] = useState<null | string>(null);

  const handleChangeAvatar = async (data: ImagePickerResponse) => {
    if (data.assets && data.assets[0].uri) {
      const resp = await fetch(data.assets[0].uri);
      const blob = await resp.blob();
      setValue('mediaUrl', {
        fileName: data.assets[0].fileName,
        data: blob,
      });
      setUploadData(data.assets[0].uri);
    }
  };

  const handleChoosePhoto = async () => {
    launchImageLibrary({ mediaType: 'photo' }, (response) => {
      handleChangeAvatar(response);
    });
  };

  return (
    <View>
      {uploadData? 
        <Image source={{ uri: uploadData }}accessible style ={styles.icon}/>:
        <Pressable onPress={handleChoosePhoto} >
            {
                currentTheme.theme==="light"?
                <SvgUploadLight/>:
                <SvgUploadDark/>
            }
        </Pressable>
      }

    </View>
  )
}