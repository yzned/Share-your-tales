import { View, Text, Pressable, PressableProps } from 'react-native'
import React, { FC } from 'react'
import SvgEye from '../../../../--no-index/eye'
import { getStyles } from './styles'
import { useTheme } from '../../hooks/useTheme'
import SvgEyeClosed from '../../../../--no-index/eye-closed'
type EyeProps={
    showPassword:boolean;
    isError:boolean;
    isActive:boolean
}&PressableProps
export const Eye:FC<EyeProps> = ({showPassword,onPress,isError,isActive}) =>{
  const styles = useTheme(getStyles); 
  const checkCurrentStatus =()=>{
    if(isError)
    {
        return styles.errorColor.color
    }
    if(isActive){
        return styles.activeColor.color
    }
    return styles.defaultColor.color
  }
  return (
    <Pressable onPress={onPress}>
        {showPassword?
            <SvgEye fill={checkCurrentStatus()}/>
            :
            <SvgEyeClosed fill={checkCurrentStatus()}/>
        }
    </Pressable>
  )
}