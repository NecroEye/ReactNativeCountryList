import * as React from 'react';
import {View, SafeAreaView, Text, StyleSheet} from "react-native";
import {style as styles} from './styles';

class Header extends React.Component{

  render(){

    return(

      <SafeAreaView style={styles.main_menu} >
        <Text style={styles.subTitle}>Which country are you curious about?</Text>
        <View style={styles.line} />
        <Text style={styles.title} >Countries</Text>
      </SafeAreaView>

    )


  }


}

export default Header;
