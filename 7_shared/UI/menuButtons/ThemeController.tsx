import { Text, Pressable, View } from 'react-native'
import React, { FC,useState } from 'react'
import { useTheme } from '../../hooks/useTheme'
import { getStyles } from './style'
import SvgSun from '../../../../--no-index/sun'
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHoooks'
import { accountDataSelectors } from '../../../1_app/redux/duck/acccountData/selectors'
import { changeThemeToDark, changeThemeToLight } from '../../../1_app/redux/duck/acccountData/slice'
import SvgMoon from '../../../../--no-index/moon'
type ProfileProps ={
    disabled?:boolean
}
export const ThemeController:FC<ProfileProps>=({disabled})=> {
  const [pressed,setPressed] = useState(false);
  const styles = useTheme(getStyles)
  const dispatch = useAppDispatch()
  const theme = useAppSelector((state)=>accountDataSelectors.getCurrentTheme(state))

  const checkPressedStatus=()=>{
    if(pressed){
        return styles.active.color
    }
    if(disabled){
        return styles.disable.color;
    }
    return styles.defaultColor.color
  }
  const changeTheme = ()=>{
    if(theme==="light")
    {
      dispatch(changeThemeToDark())
    }
    if(theme==="dark")
    {
      dispatch(changeThemeToLight())
    }
  }
  return (
    <Pressable 
        onPressIn={()=>setPressed(true)}
        onPressOut={()=>setPressed(false)}
        onPress={changeTheme}
    >
      {
        theme==="light"?
        <View style={styles.presable}>
          <SvgSun color={checkPressedStatus()}/>
          <Text style={[styles.text,
          pressed&&styles.active
          ,disabled&&styles.disable
          ]}>
              Light Theme
          </Text>
        </View>
        :
        <View style={styles.presable}>
        <SvgMoon color={checkPressedStatus()}/>
        <Text style={[styles.text,
        pressed&&styles.active
        ,disabled&&styles.disable
        ]}>
          Night Theme
        </Text>
      </View>
      }
    </Pressable>
  )
}