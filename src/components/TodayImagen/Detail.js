import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { useRoute } from '@react-navigation/native';

const Detail = () => {
  const route = useRoute();
  const { hdurl, title, explanation } = route.params; 

  return (
    <View style={styles.container}>
      <Image source={{ uri: hdurl }} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.explanation}>{explanation}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
      backgroundColor: "rgba(7, 26, 93, 1)", 
    },
    image: {
      width: '100%',
      height: 300,
      borderRadius: 8,
      marginBottom: 16,
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 8,
      color: '#fff', 
    },
    explanation: {
      fontSize: 16,
      color: '#fff', 
    },
  });
  
  export default Detail;
  


