import { View, Text, Pressable,StyleProp,ViewStyle, PressableProps } from 'react-native'
import React, { FC, useState } from 'react'
import {getStyles} from './styles'
import { useTheme } from '../../../hooks/useTheme'

type CustomButtonProps = {
  name:string,
}&PressableProps
export const BigButton:FC<CustomButtonProps>=({name,onPress,disabled})=>{
  const styles = useTheme(getStyles);
  const [textPressed,setPressed]= useState(false);
  return (
      <Pressable style={({pressed})=>[
        styles.buttonStyles,
        pressed&&styles.pressedButton,
        disabled&&styles.disabledButton
      ]}
      onPress={onPress}
      onPressIn={()=>{setPressed(true)}}
      onPressOut={()=>{setPressed(false)}}
      >
        <Text style={
          [styles.buttonText,
          textPressed&&styles.pressedButtonText,
          disabled&&styles.disabledText
          ]
        } >
          {name}
        </Text>
      </Pressable>
  )
}