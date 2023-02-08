import React from "react";
import { Button, SafeAreaView, Text } from "react-native";
import axios from "axios";

const App = () => {

  function fetchData(){
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then(response => console.log(response))
    .catch(error => console.log(error));
  }

  return(
    <SafeAreaView>
      <Text>HELLO API</Text>
      <Button title="Click" onPress={fetchData} />
    </SafeAreaView>
  );
}

export default App;