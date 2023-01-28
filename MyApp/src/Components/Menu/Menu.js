import { View, Text, TouchableOpacity } from "react-native";
import styles from "./Menu.style";

const Menu = () => {
    return(
        <View style={styles.container}>
            <TouchableOpacity style={styles.content}>
                <Text style={styles.title}>Ana Sayfa</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.content}>
                <Text style={styles.title}>Hakkımda</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.content}>
                <Text style={styles.title}>İletişim</Text>
            </TouchableOpacity>
        </View>
    );
}

export default Menu;