import { StyleSheet } from "react-native";
import { ThemeType } from "../../theme";
import { typography } from "../../../../typography";
export const getStyles =(theme:ThemeType)=> StyleSheet.create({
    checkbox:{
     display:"flex",
     alignItems:"center",
     flexDirection:"row",
     marginTop:16
    },
    noActive:{
        borderColor:theme.grayscale.grayscale500,
        borderWidth:1,
        borderRadius:100,
        width:20,
        height:20,
        display:"flex",
        alignItems:"center",
        justifyContent:"center"
    },
    active:{
        borderRadius:100,
        width:20,
        height:20,
        backgroundColor:theme.grayscale.grayscale200,
        display:"flex",
        alignItems:"center",
        justifyContent:"center"
    },
    marker:{
        backgroundColor:theme.primary.pressed,
        width:8,
        height:8,
        borderRadius:100,
    },
    text:{
        ...typography.bodyRegular16,
        color:theme.grayscale.grayscale700,
        marginLeft:8
    },
});