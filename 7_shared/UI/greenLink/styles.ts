import { StyleSheet } from "react-native";
import { ThemeType } from "../../theme";
import { typography } from "../../../../typography";

export const getStyles =(theme:ThemeType)=> StyleSheet.create({
    textStyle:{
        color:theme.primary.default,
        ...typography.bodyMedium16,
        
    },
    pressed:{
        color:theme.primary.pressedLink,
        ...typography.bodyMedium16,
 
    },
    disabled:{
        color:theme.grayscale.grayscale400,
        ...typography.bodyMedium16
    },
    greenLinkBorderDefault:{
        borderBottomWidth:1,
        borderBottomColor:theme.primary.default,
    },
    greenLinkBorderPressed:{
        borderBottomWidth:1,
        borderBottomColor:theme.primary.pressedLink,
    },
    greenLinkBorderDisabled:{
        borderBottomWidth:1,
        borderBottomColor:theme.grayscale.grayscale400,
    }
});

