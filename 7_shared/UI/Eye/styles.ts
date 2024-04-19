import { StyleSheet } from "react-native";
import { ThemeType } from "../../theme";

export const getStyles =(theme:ThemeType) => StyleSheet.create({
    defaultColor:{
       color:theme.grayscale.grayscale400
    },
    errorColor:{
        color:theme.additional.error
    },
    activeColor:{
        color:theme.grayscale.grayscale700
    }
});