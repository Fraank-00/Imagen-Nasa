import React from "react";
import { View, Text, Image, StyleSheet, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import PropTypes from "prop-types";

function TodayImage({ date, hdurl, title = "Título no disponible", explanation }) {
  const navigation = useNavigation(); 

  console.log("Props recibidas en TodayImage:", { date, hdurl, title });

  const handleViewDetails = () => {
    navigation.navigate('Detail', { hdurl, title, explanation }); 
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: hdurl }} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.date}>{date}</Text>
     
      <View style={styles.buttonContainer}>
        <Button title="View" onPress={handleViewDetails} />
      </View>
    </View>
  );
}

TodayImage.propTypes = {
  date: PropTypes.string.isRequired,
  hdurl: PropTypes.string.isRequired,
  title: PropTypes.string,
  explanation: PropTypes.string.isRequired,
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#2c449d',
    marginVertical: 16,
    borderRadius: 32,
    padding: 16,
    marginHorizontal: 24,
  },
  image: {
    width: '100%',
    height: 190,
    borderWidth: 2,
    borderColor: '#fff',
    borderRadius: 32,
  },
  title: {
    color: '#fff',
    fontSize: 20,
    marginVertical: 12,
    fontWeight: 'bold',
  },
  date: {
    color: '#fff',
    fontSize: 16,
  },
  explanation: {
    color: '#ccc',
    marginTop: 4,
  },
  buttonContainer: {
    alignItems: 'flex-end',
  },
});

export default TodayImage;
