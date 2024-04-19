
import { View, Text, Pressable, PressableProps } from 'react-native'
import React, { FC, useState } from 'react'
import { useTheme } from '../../hooks/useTheme'
import { getStyles } from './style'
import { PostFilterType } from '../../types/api-types'
type TabsTypes = {
  setPostFilterType: React.Dispatch<React.SetStateAction<PostFilterType>>
}&PressableProps
export const Tabs:FC<TabsTypes>=({setPostFilterType})=> {
  const styles = useTheme(getStyles)
  const [pressedButton,setPressed] = useState(1);
  const onPressNew = ()=>{
    setPostFilterType(PostFilterType.New)
    setPressed(1)
  }

  const onPressTop = ()=>{
    setPostFilterType(PostFilterType.Top)
    setPressed(2)
  }
  return (
    <View style={styles.tabs}>
      <Pressable style={[pressedButton===1?styles.pressed:styles.noPressed]}
      onPress={onPressNew}
      >
        <Text style={[pressedButton===1?styles.pressedText:styles.noPressedText]}>
            New
        </Text>
      </Pressable>
      <Pressable style={[pressedButton===2?styles.pressed:styles.noPressed]}
      onPress={onPressTop}>
        <Text style={[pressedButton===2?styles.pressedText:styles.noPressedText]}>
            Top
        </Text>
      </Pressable>
    </View>
  )
}