import { Pressable, PressableProps, Share } from 'react-native'
import React, { FC, useState } from 'react'
import { useTheme } from '../../../../../hooks/useTheme';
import { getStyles } from './style';
import SvgShare from '../../../../../../../--no-index/share';
type ShareButtonProps = {
  id:string
}&PressableProps

export const ShareButton:FC<ShareButtonProps>=({id})=> {
    const styles = useTheme(getStyles);
    const [pressed,setPressed]= useState(false);
    const handleIconColor = ()=>{
        if(pressed){
            return styles.pressedIcon.color
        }
        return styles.initialIcon.color
    }
    const onShare = async ()=>{
        const head = await Share.share({
            message:'1234',
            url:id,
        })
    }
    return (
        <Pressable
        style={styles.sharedStyle} 
            onPress={onShare}
            onPressIn={()=>{setPressed(true)}}
            onPressOut={()=>{setPressed(false)}}
        >
            <SvgShare color={handleIconColor()}/>
        </Pressable>
    )
}