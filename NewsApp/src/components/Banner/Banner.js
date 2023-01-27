import {ScrollView, Image} from "react-native";
import news_banner_data from "../../../news_banner_data.json";
import styles from "./Banner.style";

function Banner(){
    return(
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {
            news_banner_data.map(bannerMews => <Image style={styles.banner_image} source={{uri: bannerMews.imageUrl}} /> )
        }
        </ScrollView>
    );
}

export default Banner;