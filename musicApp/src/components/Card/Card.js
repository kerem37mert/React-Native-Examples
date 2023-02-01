import { View, Text, Image } from "react-native";
import styles from "./Card.style";

export default function Card({musicData}){
    return(
        <View style={styles.container}>
            <View style={styles.imgContainer}>
                <Image style={styles.img} source={{uri: musicData.imageUrl}} />
            </View>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>{musicData.title}</Text>
                <View style={styles.artistContainer}>
                    <Text style={styles.artist}>{musicData.artist}</Text>
                    <Text style={styles.year}>{musicData.year}</Text>
                </View>
            </View>
            <View style={styles.alertContainer}>
                {musicData.isSoldOut ? <Text style={styles.alert}>Tükendi</Text> : "" }
            </View>
        </View>
    );
}