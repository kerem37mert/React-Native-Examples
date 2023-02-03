import React from "react";
import { SafeAreaView, Text, StyleSheet } from "react-native";
import Button from "./components/Button";

function Welcome({navigation}){
    return(
        <SafeAreaView style={styles.container}>
            <Text style={styles.header}>Kebap Fitness Salonu</Text>
            <Button text="Üye kaydı oluştur" onPress={() => navigation.navigate("MemberSign")} />
        </SafeAreaView>
    );
}

const styles= StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    header: {
        textAlign: "center",
        fontSize: 30,
        fontWeight: "bold",
        margin: 10,
    }
});

export default Welcome;