import React, { useState } from "react";
import { Button, SafeAreaView, Text, FlatList } from "react-native";
import axios from "axios";
import UserCard from "./components/UserCard/UserCard";

const App = () => {

  const [userList, setUserList] = useState([]);

  async function fetchData(){
    const response = await axios.get("https://jsonplaceholder.typicode.com/users");

    setUserList(response);
    console.log(response);
  }

  const renderUser = ({item}) => {
    <UserCard name={item.name}></UserCard>
  }

  return(
    <SafeAreaView>
      <FlatList data={userList} renderItem={renderUser} />
      <Button title="Click" onPress={fetchData} />
    </SafeAreaView>
  );
}

export default App;