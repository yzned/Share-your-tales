import { Pressable, PressableProps, View } from 'react-native'
import React, { FC, useState } from 'react'
import { useTheme } from '../../../../../hooks/useTheme';
import { getStyles } from './style';
import SvgPhotoWhite from '../../../../../../../--no-index/photo-white';

type ButtonProps = {
 
}&PressableProps

export const ImageButton:FC<ButtonProps>=({onPress})=> {
    const styles = useTheme(getStyles);
    const [pressed,setPressed]= useState(false);
    const handleIconColor = ()=>{
        if(pressed){
            return styles.pressedIcon.color
        }
        return styles.initialIcon.color
    }
    return (
        <Pressable 
            onPress={onPress}
            onPressIn={()=>{setPressed(true)}}
            onPressOut={()=>{setPressed(false)}}
        >
            <SvgPhotoWhite color={handleIconColor()}/>
        </Pressable>
    )
}