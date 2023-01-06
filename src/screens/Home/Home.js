import * as React from "react";
import { Text, SafeAreaView, View, ScrollView } from "react-native";
import { Header, Icon, Search, FabButton } from "../../components";
import { HomeStyles as styles } from "./styles";
import CountryObject from "./CountryObject";
import FabButtons from "../../components/Button/FabButton";
import { fetchCountries, fetchCountriesResult, changeSearchQuery } from "../../actions/countries";


class home extends React.Component {


  onSearchButtonTouched = () => {
    console.warn("search button was touched");

    //TODO:call this action by dispatch
    fetchCountries("some query");
  };
  onChangeText = (text) => {

    console.warn("new text: " + text);
   changeSearchQuery(text);
  };
  onFabButtonTouched = () => {
    console.warn("touch button has been touched");

  //TODO: call this action by dispatch
fetchCountries('somethin');
  };


  render() {

    return (
      <SafeAreaView style={styles.container}>

        <ScrollView>
          <Header />
          <Search placeholder="search something"
                  onPress={this.onSearchButtonTouched}
                  onChangeText={this.onChangeText()} />


          <View style={styles.line} />

          <CountryObject />

        </ScrollView>

        <FabButtons onPress={this.onFabButtonTouched} style={styles.fabButton} />


      </SafeAreaView>

    );

  }
}

export default home;
