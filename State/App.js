import React, {useState} from "react";
import { View, Text, Switch, FlatList } from "react-native";


const data = [
  {id:0, name: "cafe.exe", isFavoruite: true},
  {id:1, name: "cafe.dll", isFavoruite: false},
  {id:2, name: "cafe.apk", isFavoruite: true},
  {id:3, name: "cafe.min.js", isFavoruite: true},
  {id:4, name: "cafe.c", isFavoruite: false}
];

function App() {

  const [cafeList, setCafeList] = useState(data);
  const [isFavoruite, setFavoruite]  = useState(false);

function fun(value)
{
  setFavoruite(value);
   if(value){
    setCafeList(cafeList.filter(i => i.isFavoruite));
  }
  else{
    setCafeList(data);
  }
}

  return(
    <View>
      <Text>Favprileri Listele</Text>
      <Switch value={isFavoruite} style={{margin: 30}} onValueChange={fun} />
      <FlatList data={cafeList} renderItem={({item}) => <Text>{item.name}</Text>} />
    </View>
  );
}

export default App;