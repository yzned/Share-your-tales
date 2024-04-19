import { Pressable, PressableProps, View } from 'react-native'
import React, { FC, useState } from 'react'
import { useTheme } from '../../../../hooks/useTheme';
import { getStyles } from './style';
import SvgXMark from '../../../../../../--no-index/x-mark';

type ClosedButtonProps = {
 
}&PressableProps

export const ClosedButton:FC<ClosedButtonProps>=({disabled,onPress})=> {
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
            style={[
            styles.initialStyles,
            pressed&&styles.pressedButton,
            disabled&&styles.disabledButton
            ]
            }
            onPress={onPress}
            onPressIn={()=>{setPressed(true)}}
            onPressOut={()=>{setPressed(false)}}
            disabled={disabled}
        >
            <SvgXMark color = {handleIconColor()}/>
        </Pressable>
    )
}