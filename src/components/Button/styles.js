import {StyleSheet, Platform} from "react-native";
import {color} from "../../config/colors";

export const FabButtonStyles = StyleSheet.create({

  container: {width:46, height:46, backgroundColor: color.accent,
    ...Platform.select({
      ios:{shadowColor:'black', shadowRadius: 10, shadowOpacity: 0.25, shadowOffset: {heigh:5}, borderRadius: 16, },
      android:{elevation:10, borderRadius:28,overflow:'hidden'},
    }),
  },
  touchable: {
    flex:1,
    alignSelf:'stretch',

  },
  touchableContent:{
    flex:1,
    alignSelf:"stretch",
    justifyContent:"center",
    alignItems:'center',

  },

});
