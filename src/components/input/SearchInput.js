import * as React from "react";
import { View, Text, ScrollView, TextInput, TouchableOpacity } from "react-native";
import { searchInputStyle as styles } from "./styles";
import { color } from "../../config/colors";
import PropTypes from "prop-types";
import { PropsType } from "react-native/ReactCommon/hermes/inspector/tools/msggen/src/Type";

class SearchInput extends React.Component {
  render() {
    const { placeholder, onPress, onChangeText } = this.props;
    return (
      <View style={styles.container}>

        <TextInput placeholder={placeholder}
                   placeholderTextColor={color.white}
                   style={styles.input}
                   onChangeText={onChangeText}> </TextInput>


        <TouchableOpacity onPress={onPress}>
          <Text style={styles.button}>Search</Text>
        </TouchableOpacity>


      </View>
    );
  }
}

SearchInput.prototype = {
  placeholder: PropsType.string,
  onPress: PropsType.func,
  onChangeText: PropTypes.func,

};

export default SearchInput;
