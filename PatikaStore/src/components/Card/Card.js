import {View, Text, Image} from "react-native";
import styles from "./Card.style";

const Card = ({product}) => {
    return(
        <View style={styles.container}>
            <Image style={styles.productImg} source={{uri: product.imgURL}} /> 
            <View style={styles.body}>
                <Text style={styles.productTitle}>{product.title}</Text>
                <Text style={styles.price}>{product.price}</Text>
                <Text style={styles.alert}>{ product.inStock ? "" : "STOKTA YOK" }</Text>
            </View>
        </View>
    );
}

export default Card;