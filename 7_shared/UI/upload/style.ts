import { StyleSheet } from "react-native";
import { ThemeType } from "../../theme";

export const getStyles =(theme:ThemeType)=> StyleSheet.create({
    upload:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:theme.grayscale.grayscale200,
        width:343,
        height:166
    },
    text:{
        color:theme.grayscale.grayscale700
    },
    icon:{
        height:166,
        borderRadius:24
    }
});

