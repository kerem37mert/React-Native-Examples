import { Dimensions, StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        margin: 40,
        backgroundColor: "#e0e0e0",
    },
    body: {
        margin: 10
    },
    productImg: {
        height: Dimensions.get("window").height / 4,
        resizeMode: 'contain',
    },
    productTitle: {
        fontWeight: "bold",
        fontSize: 18,
    }
});