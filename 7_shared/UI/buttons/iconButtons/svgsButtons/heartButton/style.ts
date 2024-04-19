import { StyleSheet } from "react-native";
import { ThemeType } from "../../../../../theme";
import { typography } from "../../../../../../../typography";
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
    likeStyle:{
        zIndex:10,
        flexDirection:"row",
        alignItems:"center",
    },
    likeCount:{
        color:theme.grayscale.grayscale700,
        ...typography.bodyMedium14,
        marginLeft:4,
        marginRight:12,

    },
});