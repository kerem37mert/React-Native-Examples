import React from "react";
import { Button, SafeAreaView, Text } from "react-native";

function First(props)
{

    function navigateToPage()
    {
        navigation.navigate('SecondScreen', );
    }

    return(
        <SafeAreaView>
            <Text>Hello First</Text>
            <Button title="Go to Second" onPress={() => props.navigation.navigate('SecondScreen',{"username": "kerem"}) } />
        </SafeAreaView>
    );
}

export default First;