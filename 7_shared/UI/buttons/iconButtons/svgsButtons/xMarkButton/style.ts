import { StyleSheet } from "react-native";
import { ThemeType } from "../../../../../theme";

export const getStyles =(theme:ThemeType)=> StyleSheet.create({
    initialIcon:{
        color:theme.grayscale.grayscale700
    },
    pressedIcon:{
        color:theme.additional.pressedXmarkColor
    },
    disabledIcon:{
        color:theme.additional.disabledXMarkColor
    }
});