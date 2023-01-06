import * as React from 'react';
import {View, Text, Platform, TouchableOpacity, TouchableNativeFeedback} from 'react-native';
import {FabButtonStyles as styles} from "./styles";
import PropTypes from "prop-types";

class FabButton extends React.Component{




  render(){

    const ToucableComponent = Platform.OS === "ios" ? TouchableOpacity : TouchableNativeFeedback;
    const {onPress, style} = this.props;
    return(


      <View style={[styles.container,style]}>
        <ToucableComponent onPress={onPress} style={styles.touchable}>
          <View style={styles.touchableContent}>
            <Text> Rest </Text>
          </View>
        </ToucableComponent>
      </View>

    );


  }


}

FabButton.prototype = {

  onPress: PropTypes.func,
  style: PropTypes.any,

};

export default FabButton;
