import { View, Text, Pressable,StyleProp,ViewStyle, PressableProps } from 'react-native'
import React, { FC, useState } from 'react'
import {getStyles} from './styles'
import { useTheme } from '../../../hooks/useTheme'

type CustomButtonProps = {
  name:string,
  isCansel?:boolean
}&PressableProps
export const MediumButton:FC<CustomButtonProps>=({name,onPress,disabled,isCansel})=>{
  const styles = useTheme(getStyles);
  const [pressed,setPressed]= useState(false);
  return (
      <Pressable style={()=>[
        styles.buttonStyles,
        pressed&&styles.pressedButton,
        disabled&&styles.disabledButton,
      ]}
      onPress={onPress}
      onPressIn={()=>{!isCansel&&setPressed(true)}}
      onPressOut={()=>{!isCansel&&setPressed(false)}}
      >
        <Text style={
          [styles.buttonText,
          pressed&&styles.pressedButtonText,
          disabled&&styles.disabledText,
          isCansel&&styles.isCanselText
          ]
        } >
          {name}
        </Text>
      </Pressable>
  )
}