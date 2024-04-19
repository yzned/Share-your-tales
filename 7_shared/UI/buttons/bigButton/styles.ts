import { StyleSheet } from "react-native";
import { ThemeType } from "../../../theme";

export const getStyles =(theme:ThemeType)=> StyleSheet.create({
    buttonStyles:{
        backgroundColor:theme.primary.bigButtonBackgroundColor,
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        height:56,
        width:340,
        borderRadius:21
    },
    buttonText:{
        color:theme.primary.bigButtonTextColor,
        fontSize:16
    },

    pressedButton:{
        backgroundColor:theme.primary.pressed,
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        height:56,
        width:340,
        borderRadius:21
    },
    pressedButtonText:{
        color:theme.grayscale.white
    },
    disabledButton:{
        backgroundColor:theme.grayscale.grayscale300,
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        height:56,
        width:340,
        borderRadius:21
    },
    disabledText:{
        color:theme.grayscale.grayscale500,
        fontSize:16
    }
});