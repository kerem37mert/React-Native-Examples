import React from "react";
import { SafeAreaView, View, StyleSheet, Text, FlatList, Image, ScrollView, Dimensions} from "react-native";
import NewsCard from "./components/NewsCard";
import Banner from "./components/Banner";
import news_data from "../news_data.json";


function App(){

    const renderNews = ({item}) => <NewsCard news={item} />

    return(
        <SafeAreaView style={styles.container}>
            <Text style={styles.header_text}>News</Text>
            <FlatList ListHeaderComponent={() => <Banner />} data={news_data} renderItem={ renderNews } />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#eceff1"
    },
    header_text: {
        fontWeight: "bold",
        fontSize: 50
    }
});

export default App;