
import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text, ScrollView, TouchableOpacity } from "react-native";
import Header from "../../components/Header";
import fetchApi from "../../utils/fech"; 
import TodayImage from "../../components/TodayImagen/TodayImage"; 
import { format, sub } from "date-fns";

function Home({ navigation }) { 
  const [todayImage, setTodayImage] = useState(null); 
  const [last5DaysImages, setLast5DaysImages] = useState([]);

  useEffect(() => {
    const loadTodayImage = async () => {
      try {
        const todayImageResponse = await fetchApi(); 
        setTodayImage(todayImageResponse);
      } catch (error) {
        console.error("Error loading today's image:", error);
        setTodayImage(null);
      }
    };

    const loadLast5DaysImages = async () => {
      const images = [];
      const currentDate = new Date();

      for (let i = 1; i <= 5; i++) {
        const dayDate = format(sub(currentDate, { days: i }), 'yyyy-MM-dd');
        try {
          const imageResponse = await fetchApi(`date=${dayDate}`);
          if (imageResponse && imageResponse.hdurl) {
            images.push(imageResponse);
          }
        } catch (error) {
          console.error(`Error al obtener la imagen para el día ${dayDate}:`, error);
        }
      }
      setLast5DaysImages(images);
    };

    loadTodayImage();
    loadLast5DaysImages();
  }, []);

  return (
    <View style={styles.container}>
      <Header />
      {todayImage ? (
        <TodayImage {...todayImage} />
      ) : (
        <Text>Loading...</Text>
      )}
      <Text style={styles.title}>Last 5 Days</Text>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.scrollView}>
        {last5DaysImages.length > 0 ? (
          last5DaysImages.map((image, index) => (
            <TouchableOpacity key={index} onPress={() => navigation.navigate('Detail', { image })}>
              <TodayImage {...image} />
            </TouchableOpacity>
          ))
        ) : (
          <Text>No images available</Text>
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(7, 26, 93, 1)",
    flex: 1,
    paddingHorizontal: 16,
  },
  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 16, 
  },
  scrollView: {
    flexGrow: 1, 
  },
});

export default Home;
