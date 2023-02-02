import React, { useState } from "react";
import { SafeAreaView, View, Text, StyleSheet, FlatList, TextInput, Button, TouchableOpacity, ToastAndroid } from "react-native";
import MyList from "./MyList";

const App = () => { 
  
  const [id, setId] = useState(0);
  const [text, setText] = useState();

  function changeText(txt)
  {
    setText(txt);
  }

  const [list, setList] = useState([])

  function addItem()
  {
    if(text == "")
    {
      alert("Lütfen boş bırakmayınız");
    }
    else{
      setList([...list,{id:id, text: text, isDone: false}]);
      setId(id+1);
    }

    console.log(list)
  }

  const updateList= itemId => {
    const newList = [];
    list.forEach(item => {
      if(item.id == itemId)
      {
        item.isDone = !item.isDone;
      }
      newList.push(item);
    });
    setList(newList);
  }

  const deleteList = (itemId) => {
    const newList = list.filter(item => item.id != itemId);
    setList(newList);
  }


  return(
    <SafeAreaView style = {styles.container}>
      <FlatList 
        ListHeaderComponent={() => <View style={styles.titleContainer}>
        <Text style={styles.title}>Yapılacaklar</Text>
        <Text style={styles.title}>{(list.filter(f => f.isDone === false)).length}</Text>
      </View>}
        data={list} 
        renderItem={({item}) => <MyList onPress={() => alert("kdnfkjn")} to={item} isdel={deleteList} isup={updateList} /> } 
        />
      <View style={styles.inputContainer}>
        <TextInput onChangeText={changeText} style={styles.input} placeholder="Yapılacak..." />
        <TouchableOpacity style={styles.button} onPress={addItem}>
          <Text style={{textAlign: "center", color: "#fff"}}>Kaydet</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    backgroundColor: "#102027"
  },
  titleContainer: {
    margin: 40,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between"

  },
  title: {
    fontWeight: "bold",
    fontSize: 40,
    color:"#FFA500"
  },
  inputContainer: {
    backgroundColor: "#37474F",
    margin: 40,
    borderRadius: 10,
    padding: 30
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: "#6E8490",
    marginBottom: 30,
    fontSize: 20
  },
  button: {
    padding: 10,
    backgroundColor: "#808080",
    marginLeft: 50,
    marginRight: 50,
    borderRadius: 20
  }
});

export default App;