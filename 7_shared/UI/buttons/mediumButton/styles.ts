import { StyleSheet } from "react-native";
import { ThemeType } from "../../../theme";
import { typography } from "../../../../../typography";
export const getStyles =(theme:ThemeType)=> StyleSheet.create({
    buttonStyles:{
        backgroundColor:theme.grayscale.white,
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        height:"100%",
        width:"100%",
        borderRadius:21
    },
    buttonText:{
        color:theme.primary.default,
        ...typography.bodyMedium16
    },

    pressedButton:{
        backgroundColor:theme.primary.default,
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        height:"100%",
        width:"100%",
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
        height:44,
        width:340,
        borderRadius:21
    },
    disabledText:{
        color:theme.grayscale.grayscale500,
        fontSize:16
    },
    isCanselText:{
        color:theme.additional.error
    }
});