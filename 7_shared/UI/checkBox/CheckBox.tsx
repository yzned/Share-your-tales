import { View, Text, Pressable } from 'react-native'
import React, { useState } from 'react'
import { useTheme } from '../../hooks/useTheme'
import { getStyles } from './style'
import SvgCheck from '../../../../--no-index/check'


export default function CustomCheckBox() {
 const styles = useTheme(getStyles);
 const [isCheck,setIsCheck] = useState(false); 
 const handleCheckState = ()=>
 {
    isCheck?setIsCheck(false):setIsCheck(true)
 }

  return (
       <Pressable onPress={handleCheckState} style={
        [isCheck?styles.active:styles.noActive]
       }>
        <View>
            {isCheck&&<SvgCheck color={styles.checkColor.color}/>}
        </View>
       </Pressable>
  )
}