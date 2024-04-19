import { StyleSheet } from "react-native";
import { ThemeType } from "../../../../theme";


export const getStyles =(theme:ThemeType)=> StyleSheet.create({
    initialStyles:{
        width:38,
        height:38,
        borderRadius:100,
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:theme.primary.default,
        position:"absolute",
        bottom:0,
        right:0
    },
    pressedButton:{
        width:38,
        height:38,
        borderRadius:100,
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:theme.additional.iconPressedButtonColor,
        position:"absolute",
        bottom:0,
        right:0
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
    },
    avatarPhoto:{}
});