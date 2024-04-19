import { StyleSheet } from "react-native";
import { ThemeType } from "../../../../../theme";

export const getStyles =(theme:ThemeType)=> StyleSheet.create({
    initialIcon:{
        color:theme.additional.heartButtonInitial
    },
    pressedIcon:{
        color:theme.primary.default
    },
    disabledIcon:{
        color:theme.grayscale.grayscale400
    },
    sharedStyle:{
        zIndex:10
    }
});