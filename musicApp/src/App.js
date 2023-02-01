import React, { useState } from "react";
import { SafeAreaView, StyleSheet, TextInput, FlatList } from "react-native";
import musicData from "../musicData.json";
import Card from "./components/Card";


const App = () => {

  const [filtre,setFiltre] = useState(musicData);

  function search(text){
   let newFiltre = musicData.filter(item => item.title.toUpperCase().indexOf(text.toUpperCase()) > -1);
   setFiltre(newFiltre);
  } 

  return (
    <SafeAreaView>
      <FlatList 
        ListHeaderComponent={<TextInput onChangeText={search} placeholder="Ara..." style={styles.search} />} 
        data={filtre} 
        renderItem={({item}) => <Card musicData={item} />} 
        />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  search: {
    margin: 20,
    marginTop: 40,
    padding: 10,
    backgroundColor: "#e0e0e0",
    borderRadius: 10
  }
});

export default App;