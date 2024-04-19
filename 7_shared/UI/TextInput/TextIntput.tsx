import React, { FC, useState } from 'react';
import { View, TextInput as RNTextInput, Text, StyleProp, Image ,ImageSourcePropType,TextStyle, Pressable, PressableProps, TextInput} from 'react-native';
import { getStyles } from './styles';
import { useTheme } from '../../hooks/useTheme';

interface TextInputProps{
  label: string,
  name:string
  defaultValue?:string
  value:string|undefined
  placeholder:string
  source?:ImageSourcePropType | undefined
  isError?:boolean
  isPassword?:boolean
  icon?:React.ReactNode
  isActive:boolean
  editable?:boolean
  onChange?:()=>void,
  onBlur:()=>void,
  onPress?:()=>void
  multiline?:boolean
}
export const Input = (props: TextInputProps) => {
    const {
      name,
      label,
      defaultValue,
      placeholder,
      isError,
      icon,
      editable,
      isPassword,
      value,
      multiline,
      onChange,
      onBlur,
      onPress,
      ...inputProps
    }   = props;

    const styles= useTheme(getStyles)
    const [isActive,setIsActive] = useState(false);
    
    return (
    <View style={styles.container}>
        {label && (<Text style={!isError?styles.label:styles.errorLabel}>{label}</Text>)}
        <View style={[
        styles.border,
        isError&&styles.borderError,
        isActive&&styles.activeBorder]}>
            <TextInput
            onPressIn={onPress}
                style={
                  [styles.input,
                    isError&&styles.errorInput,
                  ]
                }
                secureTextEntry={isPassword}
                onChangeText={onChange}
                onBlur={onBlur}
                onChange={onChange}
                defaultValue={defaultValue}
                value={value}
                placeholder={placeholder}
                placeholderTextColor={!isError?"#9B9B9B":"#C2534C"} 
                {...inputProps}
                editable={editable}
                multiline={multiline}
            />
            {icon}
        </View>
      </View>
    );
  }
