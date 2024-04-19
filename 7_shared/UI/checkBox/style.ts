import { StyleSheet } from "react-native";
import { ThemeType } from "../../theme";

export const getStyles =(theme:ThemeType)=> StyleSheet.create({
    noActive:{
        borderColor:theme.grayscale.grayscale500,
        borderWidth:1,
        borderRadius:4,
        width:20,
        height:20,
        display:"flex",
        alignItems:"center",
        justifyContent:"center"
    },
    active:{
        borderRadius:4,
        width:20,
        height:20,
        backgroundColor:theme.grayscale.grayscale200,
        display:"flex",
        alignItems:"center",
        justifyContent:"center"
    },
    checkColor:{
        color:theme.primary.pressed
    }
});