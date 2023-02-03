import React from "react";
import { SafeAreaView, Text, Button } from "react-native";

function Second(props){
    return(
        <SafeAreaView>
            {console.log()}
            <Text>{ props.route.params.username }</Text>
            <Button title="Go Back" onPress={() => props.navigation.goBack() } />
        </SafeAreaView>
    );
}

export default Second;