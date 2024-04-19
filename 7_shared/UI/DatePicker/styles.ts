import { StyleSheet } from "react-native";
import { ThemeType } from "../../../7_shared/theme";
import { typography } from "../../../../typography";

export const getStyles =(theme:ThemeType)=> StyleSheet.create({
    datePicker:{
        width:"100%",
        height:"100%",
        justifyContent:"center",
        alignItems:"center"
    },
    closeArea:{
        position:"absolute",
        width:"100%",
        height:"100%",
        backgroundColor: 'rgba(52, 52, 52, 0.6)',
        zIndex:0
       },
    datePickerContent:{
        backgroundColor:theme.grayscale.white,
        width:"95%",
        borderRadius:16,
        paddingTop:16,
        paddingLeft:10,
        paddingRight:10,
        paddingBottom:16,
        justifyContent:"center",
        alignItems:"center"
    },
    datePickerContentBottomPart:{
        backgroundColor:theme.grayscale.white,
        width:"95%",
        height:88,
        marginTop:30,
        borderRadius:16,
        justifyContent:"center",
        alignItems:"center",
        overflow:"hidden"
    },
    header:{
        borderBottomWidth:1,
        borderBottomColor:theme.grayscale.grayscale400,
        justifyContent:"center",
        alignItems:"center",
        width:"95%"
    },
    headerText:{
        ...typography.bodyRegular16,
        color:theme.additional.headerDatePickColor,
        marginBottom:18
    },
    dateColor:{
        color:theme.grayscale.grayscale700
    },
    button:{
        height:"50%",
        width:"110%"
    },
    buttonConfirm:{
        height:"50%",
        width:"110%",
        borderBottomWidth:1,
        borderBottomColor:theme.grayscale.grayscale300
    }
});