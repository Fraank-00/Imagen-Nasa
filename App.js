// App.js
import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import Routes from './src/routes/roouter'; 

export default function App() {
  return (
    <SafeAreaView style={styles.container}>  
      <Routes/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(7, 26, 93, 1)", 
    flex: 1,
  },
});
