import * as React from "react";
import { View, Text,Platform,TouchableOpacity, TouchableNativeFeedback } from "react-native";
import { countryStyle as styles } from "./styles";


class CountryObject extends React.Component {

  render() {

    const countryName = "some country";
    const TouchableComponent = Platform.OS === "ios" ? TouchableOpacity : TouchableNativeFeedback;


    return (

    <TouchableComponent style={styles.container}>
      <View style={styles.contentContainer}>
        <View style={styles.countryFlag}>

        </View>
        <Text style={styles.country}>{countryName}</Text>


      </View>
    </TouchableComponent>


    );

  }


}

export default CountryObject;
