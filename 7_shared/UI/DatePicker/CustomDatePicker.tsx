
import { Pressable, Text, View } from 'react-native'
import React, { FC, useState } from 'react'
import DatePicker from 'react-native-date-picker'
import { useTheme } from '../../hooks/useTheme';
import { getStyles } from './styles';
import { MediumButton } from '../buttons/mediumButton/MediumButton';
interface CustomDatePickerProps{
    setDateModalVisible:React.Dispatch<React.SetStateAction<boolean>>;
    onChange: (date: string|undefined) => void;

}
export const CustomDatePicker:FC<CustomDatePickerProps>=({setDateModalVisible,onChange})=>{  
  const styles = useTheme(getStyles)
  
  const [date, setDate] = useState(new Date())
  const closeModal = ()=>{
    setDateModalVisible(false)
  }
  const confirmDate = ()=>{
    const formattedDate = `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')}`;
    onChange(formattedDate);
    closeModal()
  }

  return (
    <View style={styles.datePicker}>
        <Pressable onPress={closeModal} style={styles.closeArea}>
        </Pressable>

        <View style={styles.datePickerContent}>
            <View style ={styles.header}>
                <Text style={styles.headerText}>
                    Pick the date of your dirth
                </Text>
            </View>
            <DatePicker
                mode='date'
                date={date}
                textColor={styles.dateColor.color}
                onDateChange={(newDate) => {
                setDate(newDate)
                }}
            />
        </View>
        <View style={styles.datePickerContentBottomPart}>
            <View style={styles.buttonConfirm}>  
                <MediumButton name='Confirm' onPress={()=>{confirmDate()}}/>
            </View>
            <View style={styles.button}>  
                <MediumButton name='Cansel' isCansel onPress={closeModal}/>
            </View>
        </View>
    </View>     
  )
}