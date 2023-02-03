import React, { useState } from "react";
import { SafeAreaView, View, Text, Alert } from "react-native";
import Button from "./components/Button";
import Input from "./components/Input";

function MemberSign({navigation}){

    const [userName, setUserName] = useState(null);
    const [userSurname, setUserSurname] = useState(null);
    const [useAge, setUserAge] = useState(null);
    const [userMail, setUserMail] = useState(null);
    const [userHomeTown, setUserHomeTown] = useState(null);

    function handleSubmit(){

        if(!userName || !userSurname || !useAge || !userMail || !userHomeTown)
        {
            Alert.alert("Kebap Fitness Salonu", "Bilgiler boş bırakılamaz");
        }
        
        const user = {
            userName,
            userSurname,
            useAge,
            userMail,
            userHomeTown
        }
        
        navigation.navigate("MemberResult",{userOBJ: user});
    }

    return(
        <SafeAreaView>
            <Text>Member Sign</Text>
            <Input placeholder="üye ismini gir" label="Üye Adı:" onChangeText={setUserName} />
            <Input placeholder="üye soyismini gir" label="Üye Soy Adı:" onChangeText={setUserSurname} />
            <Input placeholder="üye yaş gir" label="Yaş:" onChangeText={setUserAge} />
            <Input placeholder="üye eposta adresini gir" label="Üye eposta:" onChangeText={setUserMail} />
            <Input placeholder="üye memleketi gir" label="Üye memleketi:" onChangeText={setUserHomeTown} />
            <Button text="Kaydı Tamamla" onPress={handleSubmit} />
        </SafeAreaView>
    );
}

export default MemberSign;