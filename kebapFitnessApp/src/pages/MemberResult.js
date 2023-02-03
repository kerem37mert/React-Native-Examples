import React from "react";
import { SafeAreaView, Text } from "react-native";

function MemberResult({route}){
    return(
        <SafeAreaView>
            <Text>{route.params.userOBJ.userName}</Text>
            <Text>{route.params.userOBJ.userSurname}</Text>
            <Text>{route.params.userOBJ.useAge}</Text>
            <Text>{route.params.userOBJ.userMail}</Text>
            <Text>{route.params.userOBJ.userHomeTown}</Text>
        </SafeAreaView>
    );
}

export default MemberResult;