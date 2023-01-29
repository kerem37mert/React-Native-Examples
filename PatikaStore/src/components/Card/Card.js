import {View, Text, Image} from "react-native";
import styles from "./Card.style";

const Card = ({product}) => {
    return(
        <View style={styles.container}>
            <Image style={styles.productImg} source={{uri: product.imgURL}} /> 
            <View style={styles.body}>
                <Text style={styles.productTitle}>{product.title}</Text>
            </View>
        </View>
    );
}

export default Card;