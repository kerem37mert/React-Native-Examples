import React, { useEffect, useState } from "react";
import {View, Text, Button} from "react-native";

const App = () => {

  const [sayi, setSayi] = useState(0);

  useEffect(() => {
    console.log(sayi)
  }, [sayi]);


  const click = () => {
    setSayi(sayi+1);
  }

 
  return(
    <View>
      <Text style={{marginTop: 50, marginBottom:50}}>{sayi}</Text>
      <Button title="Tıkla" onPress={click} />
    </View>
  );
}

export default App;