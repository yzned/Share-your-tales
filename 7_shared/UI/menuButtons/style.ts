import { StyleSheet } from "react-native";
import { ThemeType } from "../../theme";
import { typography } from "../../../../typography";

export const getStyles =(theme:ThemeType)=> StyleSheet.create({
    presable:{
        display:"flex",
        flexDirection:"row",
        alignItems:"center"
    },
    defaultColor:{
        color:theme.grayscale.grayscale700
    },
    active:{
        color:theme.primary.pressed
    },
    disable:{
        color:theme.grayscale.grayscale200
    },
    text:{
        marginLeft:8,
        ...typography.bodyRegular18,
        color:theme.grayscale.grayscale700
    }
});
