import { View,Image } from 'react-native'
import React, { FC } from 'react'
import { useTheme } from '../../hooks/useTheme';
import { getStyles } from './styles';
import SvgBigUserIcon from '../../../../--no-index/big-user-icon';

type UserIconProps = {
    pathToIcon?:string|null
}

export const BigUserIcon:FC<UserIconProps>=({pathToIcon})=>{
  const styles = useTheme(getStyles);
  return (
        <View style={styles.bigIcon}>
            {
                pathToIcon?
                <Image source={{uri:pathToIcon}} accessible style={styles.bigAvatar}/>
                :
                <SvgBigUserIcon color={styles.iconColor.color}/>
            }
        </View>
  )
}