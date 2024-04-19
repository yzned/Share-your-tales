
import { View, Text,PressableProps, Pressable } from 'react-native'
import {getStyles} from './styles'
import { useTheme } from '../../hooks/useTheme';
import { useState } from 'react';

type greenLinkProps ={
  text:string
}&PressableProps

export default function GreenLink({text,onPress,disabled}:greenLinkProps) {
  const styles=useTheme(getStyles)
  const [pressed,setPressed] = useState(false)
  return (

      <Pressable  
      style={[styles.greenLinkBorderDefault,
        pressed&&styles.greenLinkBorderPressed,
        disabled&&styles.greenLinkBorderDisabled]}
        disabled={disabled}
        onPress={onPress}
        onPressIn={()=>setPressed(true)}
        onPressOut={()=>setPressed(false)}
      >
        <Text style={[styles.textStyle,
        pressed&&styles.pressed,
        disabled&&styles.disabled,
        ]}>
          {text}
        </Text>
      </Pressable>
  )
}