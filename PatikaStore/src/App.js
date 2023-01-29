import React from "react";
import { View, Text, FlatList } from "react-native";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import productData from "../data.json";
const App = () => {
  return(
    <View style={{flex: 1}}>
      <FlatList ListHeaderComponent={() => <Navbar title="PATIKASTORE" />} horizontal={false} numColumns={2} data={productData} renderItem={({item}) => <Card product={item} />} />
    </View>
  );
}

export default App;