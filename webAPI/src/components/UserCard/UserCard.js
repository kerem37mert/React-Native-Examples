import React from "react";
import { View, Text, StyleSheet } from "react-native";

const UserCard = (props) => {
    return(
        <View style={styles.conatiner}>
            <Text>{props.name}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {

    }
});

export default UserCard;