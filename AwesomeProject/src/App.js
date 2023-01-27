import React from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';
import Card from "./components/Card"

function App() {

  return (
    <SafeAreaView style={styles.container}>
      <Card title="Kerem Mert" text="lorem asbd uhsdgh hug uh" />
      <Card title="Kerem Mert" text="lorem asbd uhsdgh hug uh" />
      <Card title="Kerem Mert" text="lorem asbd uhsdgh hug uh" />
      <Card title="Kerem Mert" text="lorem asbd uhsdgh hug uh" />
      <Card title="Kerem Mert" text="lorem asbd uhsdgh hug uh" />
      <Card title="Kerem Mert" text="lorem asbd uhsdgh hug uh" />
      <Card title="Kerem Mert" text="lorem asbd uhsdgh hug uh" />
      <Card title="Kerem Mert" text="lorem asbd uhsdgh hug uh" />
      <Card title="Kerem Mert" text="lorem asbd uhsdgh hug uh" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e0e0e0",
  },
});

export default App;