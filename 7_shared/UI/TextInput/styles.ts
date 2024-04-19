import { StyleSheet } from "react-native";
import { ThemeType } from "../../theme";
import { typography } from "../../../../typography";

export const getStyles =(theme:ThemeType)=> StyleSheet.create({
    label: {
      color: theme.grayscale.grayscale500,
      fontWeight:'500',
      marginLeft: 0,
    },
    container:{
      marginTop:16
    },
    input:{
      width:343,
      paddingTop:15,
      paddingBottom:15,
      ...typography.bodyRegular16,
      color:  theme.grayscale.grayscale700,
      position:"relative",
    },
    border:{
      borderBottomWidth:1,
      borderBottomColor: theme.grayscale.grayscale500,
    },
    borderError:{
      borderBottomWidth:1,
      borderBottomColor:theme.additional.error,
    },
    icon:{
    position:"absolute",
    right:0,
    top:"35%",
    },
    errorLabel:{
      fontWeight:'500',
      marginLeft: 0,
      color:theme.additional.error
    },
    errorInput:{
      height: 49,
      padding:0,
      ...typography.bodyRegular16,
      position:"relative",
      color:theme.additional.error
    },
    activeInput:{
      height: 49,
      padding:0,
      ...typography.bodyRegular16,
      borderBottomWidth:1,
      borderBottomColor: theme.grayscale.white,
      color:  theme.grayscale.grayscale700,
      position:"relative",
    },
    activeBorder:{
      borderBottomWidth:1,
      borderBottomColor: theme.grayscale.grayscale700,
    }
  });

