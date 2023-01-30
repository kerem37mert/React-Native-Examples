import { Dimensions, StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        margin: 40,
        backgroundColor: "#e0e0e0",
        borderRadius: 10
    },
    body: {
        margin: 20
    },
    productImg: {
        height: Dimensions.get("window").height / 4,
        margin: 20,
        borderRadius: 10
    },
    productTitle: {
        fontWeight: "bold",
        fontSize: 18,
    },
    price: {
        color: "gray",
        fontWeight: "bold",
        marginTop: 10,
        fontSize: 16
    },
    alert: {
        color: "red",
        fontWeight: "bold",
        marginTop: 10,
        fontSize: 16
    }
});