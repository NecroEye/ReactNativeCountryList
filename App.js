import React, { Component } from "react";
import { View, Text, ScrollView, SafeAreaView, StyleSheet, TouchableOpacity } from "react-native";
import Comp from "./Comp";


export default class App extends Component {

constructor() {
  super();
  this.state = {

    name2: "murat",


  }
}



  render() {

    const {name2} = this.state;
    return (

      <SafeAreaView>

        <ScrollView>

          <View style={styles.header}>

            <TouchableOpacity>
              <Text>Sign In</Text>
            </TouchableOpacity>

          </View>

          <View style={styles.form_board}>
            <Comp />
          </View>

        </ScrollView>


      </SafeAreaView>


    );


  }


}

const styles = StyleSheet.create({

  header: {flex:1, alignItems:"center", justifyContent:"center" },
  form_board: {},
  title:{},

});
