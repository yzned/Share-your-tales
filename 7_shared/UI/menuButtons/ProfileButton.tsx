import { View, Text, Pressable, PressableProps } from 'react-native'
import React, { FC, useState } from 'react'
import { useTheme } from '../../hooks/useTheme'
import { getStyles } from './style'
import SvgProfile from '../../../../--no-index/profile'

type ProfileProps ={
    disabled?:boolean
}&PressableProps
export const Profile:FC<ProfileProps>=({disabled,onPress})=> {
  const [pressed,setPressed] = useState(false);
  const styles = useTheme(getStyles)
  
  const checkPressedStatus=()=>{
    if(pressed){
        return styles.active.color;
    }
    if(disabled){
        return styles.disable.color;
    }
    return styles.defaultColor.color;
  }
  
  return (
    <Pressable style={styles.presable}
      onPressIn={()=>setPressed(true)}
      onPressOut={()=>setPressed(false)}
      onPress={onPress}
    >
        <SvgProfile color={checkPressedStatus()}/>
        <Text style={[styles.text,
        pressed&&styles.active,
        disabled&&styles.disable
        ]}>
            Profile
        </Text>
    </Pressable>
  )
}