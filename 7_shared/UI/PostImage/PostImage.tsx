import { View, Image } from 'react-native'
import React, { FC } from 'react'
import { useTheme } from '../../hooks/useTheme'
import { getStyles } from './styles'

type PostImageProps = { 
    imagePath?:string
}

export const PostImage:FC<PostImageProps>=({imagePath})=> {
  const style = useTheme(getStyles);
  return (
    <View style={style.imagePost}>
      <Image source={{uri:imagePath}}/>
    </View>
  )
}