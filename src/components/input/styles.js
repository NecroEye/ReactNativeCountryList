import { StyleSheet, Platform } from "react-native";
import { color } from "../../config/colors";

export const searchInputStyle = StyleSheet.create({

  container: {
    flex: 1, flexDirection: "row",
    backgroundColor: "grey",
    width: 360,
    height: 32,
    margin: 15,
    borderWidth: 1.5,
    borderColor: color.accent,
    borderRadius: Platform.OS == 'ios' ? 6 : 3 ,

    overflow:'hidden',
  },
  input: {flex:1, paddingHorizontal:12, paddingVertical:7 },

  button: {flex:1,
    alignSelf:"stretch",
    justifyContent:"center",
    alignItems:'center',
    width:45,
    backgroundColor:color.text_color},


});
