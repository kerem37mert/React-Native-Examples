import react from 'react';
import {Text, View, Button, StyleSheet, SafeAreaView, TouchableOpacity} from 'react-native';

function App() {

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.card_container}>
        <View style={styles.card_body}>
          <Text style={styles.card_title}>Kerem Mert</Text>
          <Text style={styles.card_text}>Ben React native yazıyorum!</Text>
        </View>
        <TouchableOpacity style={styles.card_bottom_container}>
          <Text style={styles.card_bottom_title}>I LIKED</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e0e0e0",
  },
  card_container: {
    backgroundColor: "white",
    margin: 40,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 10,
  },
  card_body: {
    padding: 20
  },
  card_title: {
    fontSize: 20,
    fontWeight: "bold",
    margin: 10,
    marginBottom: 3,
  },
  card_text: {
    fontSize: 18,
    margin: 10,
    marginTop: 3
  },
  card_bottom_container: {
    backgroundColor: "#00C2FF",
    padding: 10,
    alignItems: "center",
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  card_bottom_title: {
    fontWeight: "bold",
    color: "white",
    fontSize: 18
  }
});

export default App;