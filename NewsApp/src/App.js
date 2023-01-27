import React from "react";
import { SafeAreaView, View, StyleSheet, Text, FlatList, Image, ScrollView, Dimensions} from "react-native";
import NewsCard from "./components/NewsCard";

import news_data from "../news_data.json";
import news_banner_data from "../news_banner_data.json";

function App(){

    const renderNews = ({item}) => <NewsCard news={item} />

    return(
        <SafeAreaView style={styles.container}>
            <Text style={styles.header_text}>News</Text>
            <FlatList ListHeaderComponent={() => (
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                {
                    news_banner_data.map(bannerMews => <Image style={styles.banner_image} source={{uri: bannerMews.imageUrl}} /> )
                }
            </ScrollView>
            )} data={news_data} renderItem={ renderNews } />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#eceff1"
    },
    banner_image: {
        height: Dimensions.get("window").height / 5,
        width: Dimensions.get("window").width / 2,
    },
    header_text: {
        fontWeight: "bold",
        fontSize: 50
    }
});

export default App;