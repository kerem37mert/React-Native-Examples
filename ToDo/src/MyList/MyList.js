import { View, Text, TouchableOpacity } from "react-native";
import styles from "./MyList.style";

const MyList = ({to, isdel, isup}) => {

    return(
        <TouchableOpacity onLongPress={() => isdel(to.id)} onPress={() => isup(to.id)} style={styles.container}>
            <Text style={to.isDone ? styles.textT : styles.textF }>{to.text}</Text>
        </TouchableOpacity>
    );
}

export default MyList;