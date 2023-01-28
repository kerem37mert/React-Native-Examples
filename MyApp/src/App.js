import React from "react";
import { View } from "react-native";
import Navbar from "./Components/Navbar";
import Menu from "./Components/Menu";

const App = () => {
  return(
    <View>
      <Navbar title="Kerem Mert" />
      <Menu />
    </View>
  );
}

export default App;