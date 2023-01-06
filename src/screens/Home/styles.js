import { StyleSheet } from "react-native";
import { color } from "../../config/colors";

export const HomeStyles = StyleSheet.create({

  container: {

    overflow: "hidden",
    resizeMode: "center",
  },
  line: {
    height: 1,
    marginTop: 20,
    backgroundColor: color.gray,

  },
  fabButton: {position:"absolute", bottom:210, end:344},

});

export const countryStyle = StyleSheet.create({


  container: { flex: 1 },
  contentContainer: { flex: 1, flexDirection: "row", alignItems:"center", paddingHorizontal: 10, paddingVertical: 12 },
  country: { flex: 1, margin: 5, color: color.text_color },
  countryFlag: { width: 32, height: 20, borderRadius: 4, backgroundColor: "yellow" },


});
