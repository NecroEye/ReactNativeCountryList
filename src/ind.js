import * as React from "react";
import { Text, View, SafeAreaView } from "react-native";
import Home from "./screens/Home/Home";
import { store } from "./config/store";
import { Provider } from "react-redux";

class App extends React.Component {


  render() {

    return (
      <Provider store={store}>

        <SafeAreaView>
          <Home />

        </SafeAreaView>

      </Provider>
    );

  }

}

export default App;

