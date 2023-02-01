import { Dimensions, StyleSheet } from "react-native";

export default StyleSheet.create({
    container:{
        flex: 1,
        flexDirection: "row",
        padding: 20,
        borderBottomColor: "#e0e0e0",
        borderBottomWidth: 1,
        
    },

    imgContainer: {
        flex: 1,
    },  
    titleContainer: {
        flex: 2,
        justifyContent: "center"
    },
    alertContainer: {
        flex: 1,
        justifyContent: "center"
    },
    img:{
        height: Dimensions.get("screen").height / 8,
        width: Dimensions.get("screen").height / 8,
        borderRadius: Dimensions.get("screen").height / 16
    },
    title: {
        fontWeight: "bold",
        fontSize: 24
    },
    artistContainer:{
        flexDirection: "row",
        marginTop: 10
    },
    artist: {
        marginRight: 20,
        fontSize: 14
    },
    year: {
        color: "grey",
    },
    alert: {
        color: "red",
        borderColor: "red",
        borderWidth: 1,
        borderRadius: 5,
        width: 100,
        textAlign: "center",
        padding: 5
    }
});