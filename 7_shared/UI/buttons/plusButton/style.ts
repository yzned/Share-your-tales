import { StyleSheet } from "react-native";
import { ThemeType } from "../../../theme";



export const getStyles =(theme:ThemeType)=> StyleSheet.create({
    initialStyles:{
        width:56,
        height:56,
        borderRadius:100,
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:theme.primary.default,
        zIndex:1000
    },
    pressedButton:{
        width:56,
        height:56,
        borderRadius:100,
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:theme.additional.iconPressedButtonColor,
        zIndex:1000
    },
    disabledButton:{
        backgroundColor:theme.additional.photoIconDisabledColor
    },

    initialIcon:{
        color:theme.grayscale.white
    },
    pressedIcon:{
        color:theme.primary.bigButtonTextColor
    },
    disabledIcon:{
        color:"#DEDEDE"
    }
});