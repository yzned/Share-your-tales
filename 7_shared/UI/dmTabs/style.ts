import { StyleSheet } from "react-native";
import { ThemeType } from "../../theme";
import { typography } from "../../../../typography";

export const getStyles =(theme:ThemeType)=> StyleSheet.create({
    tabs:{
        display:"flex",
        height:47,
        backgroundColor:"red",
        flexDirection:"row",
        borderRadius:22,
        overflow:"hidden"
    },
    pressed:{
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        width:"50%",
        backgroundColor:theme.primary.default,
    },
    pressedText:{
        color:theme.grayscale.grayscale100,
        ...typography.bodyMedium16
    },
    noPressed:{
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        width:"50%",
        backgroundColor:theme.grayscale.grayscale200
    },
    noPressedText:{
        color:theme.grayscale.grayscale700,
        ...typography.bodyMedium16
    }
});