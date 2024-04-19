import { StyleSheet } from "react-native";
import { ThemeType } from "../../../theme";
import { typography } from "../../../../../typography";


export const getStyles =(theme:ThemeType)=> StyleSheet.create({
    deleteButton:{
        height:364,
        width:73,
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:theme.additional.error,
       
    },
    text:{
        ...typography.bodyMedium14,
        color:"white",
        marginTop:4
    }
  });

