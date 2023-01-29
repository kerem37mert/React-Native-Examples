import {View, Text, TextInput} from "react-native";
import styles from "./Nabbar.style";

const Navbar = (props) => {
    return(
        <View style={styles.container}>
            <Text style={styles.title}>{props.title}</Text>
            <TextInput style={styles.input}  placeholder="Ara..."/>
        </View>
    );
}

export default Navbar;