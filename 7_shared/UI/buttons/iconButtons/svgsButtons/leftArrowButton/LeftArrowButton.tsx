import { Pressable, PressableProps } from 'react-native'
import React, { FC, useState } from 'react'
import { useTheme } from '../../../../../hooks/useTheme';
import { getStyles } from './style';
import SvgArrowLeft from '../../../../../../../--no-index/arrow-left';
type ButtonProps = {
 
}&PressableProps

export const LeftArrowButton:FC<ButtonProps>=({disabled,onPress})=> {
    const styles = useTheme(getStyles);
    const [pressed,setPressed]= useState(false);
    const handleIconColor = ()=>{
        if(pressed){
            return styles.pressedIcon.color
        }
        if(disabled){
            return styles.disabledIcon.color
        }
        return styles.initialIcon.color
    }
    return (
        <Pressable 
            onPress={onPress}
            onPressIn={()=>{setPressed(true)}}
            onPressOut={()=>{setPressed(false)}}
            disabled={disabled}
        >
            <SvgArrowLeft color={handleIconColor()}/>
        </Pressable>
    )
}