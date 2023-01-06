import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import PropTypes from 'prop-types';
import { PropsType } from "react-native/ReactCommon/hermes/inspector/tools/msggen/src/Type";

export default class Comp extends React.Component{

  render() {

    return(

      <View>
        <Text>{this.props} </Text>
      </View>


    )

  }

}
Comp.propType = {
isim: PropTypes.string.isRequired
};

Comp.defaultProp = {
  isim: "murat",

};
