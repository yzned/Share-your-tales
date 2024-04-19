import { StyleSheet } from "react-native";
import { ThemeType } from "../../../../theme";


export const getStyles =(theme:ThemeType)=> StyleSheet.create({
    initialStyles:{
        width:29,
        height:29,
        borderRadius:100,
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"#303030"
    },
    pressedButton:{
        width:29,
        height:29,
        borderRadius:100,
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:theme.additional.closedPressedButtonColor
    },
    disabledButton:{
        backgroundColor:"#696969"
    },

    initialIcon:{
        color:theme.additional.closedIconColor
    },
    pressedIcon:{
        color:"#131313"
    },
    disabledIcon:{
        color:theme.grayscale.grayscale300
    }
});