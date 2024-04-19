import { View, Pressable, PressableProps,Text } from 'react-native'
import React, { FC, useState } from 'react'
import { useTheme } from '../../hooks/useTheme'
import { getStyles } from './style'
type CustomRadioButtonProps = {
  active?:boolean
  name:string;
  defaultValue?:boolean
}&PressableProps
export const CustomRadioButton:FC<CustomRadioButtonProps>= ({active,name,onPress}) =>{
 const styles = useTheme(getStyles);
  
  return (
    <View style={styles.checkbox}>
       <Pressable onPress={onPress} style={
        [active?styles.active:styles.noActive]
       }>
        <View>
            {active&&<View style={styles.marker}></View>}
        </View>
       </Pressable>
        <Text style ={styles.text}>
           {name}
        </Text>
    </View>
  )
}