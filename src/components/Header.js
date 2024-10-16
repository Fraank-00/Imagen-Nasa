import React from "react";
import { View, Text, Image, StyleSheet, SafeAreaView } from "react-native";

function Header() {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.leftContainer}>
          <Text style={styles.text}>Explore</Text>
        </View>
        <View style={styles.rightContainer}>
          <Image
            source={require('../../assets/nasa-logo.png')}
            style={styles.logo}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  container: {
    
    flexDirection: 'row',
    alignItems: "center",
    padding: 30,
   
  },
  leftContainer: {
    flex: 1,
    alignItems: "flex-start",
  },
  rightContainer: {
    flex: 1,
    alignItems: "flex-end",
  },
  text: {
    fontSize: 20,
    color: "#fff",
  },
  logo: {
    width: 60,
    height: 60,
  },
});

export default Header;
