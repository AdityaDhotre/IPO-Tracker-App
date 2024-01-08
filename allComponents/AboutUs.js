import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import { Card, Button } from 'react-native-paper';

const AboutUs = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.name}> Discover more about our identity and mission. Resize your browser window to witness the responsive design of this page.</Text>
      </View>

      <Text style={styles.teamHeader}>Our Team</Text>

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.cardContainer}>
          <View style={styles.card}>
            <Image
              source={require('../assets/James.jpg')}
              style={{ width: 287, height: 200 }}
            />
            <View style={styles.cardContent}>
              <Text style={styles.name}>James Anderson</Text>
              <Text style={styles.role}>CEO & Founder</Text>
              <Text>Leads with innovation, integrity, and strategic prowess, shaping industry excellence.</Text>
              <Text>james@wealthcreation.com</Text>
              <Button mode="contained" style={styles.button}>Contact</Button>
            </View>
          </View>

          <View style={styles.card}>
            <Image
              source={require('../assets/Emily.jpg')}
              style={{ width: 287, height: 200 }}
            />
            <View style={styles.cardContent}>
              <Text style={styles.name}>Emily Parker</Text>
              <Text style={styles.role}>Art Director</Text>
              <Text>Crafts visual stories with precision and creativity, captivating audiences.</Text>
              <Text>emily@wealthcreation.com</Text>
              <Button mode="contained" style={styles.button}>Contact</Button>
            </View>
          </View>

          <View style={styles.card}>
            <Image
              source={require('../assets/benjamin.jpg')}
              style={{ width: 287, height: 200 }}
            />
            <View style={styles.cardContent}>
              <Text style={styles.name}>Benjamin Hughes</Text>
              <Text style={styles.role}>Designe</Text>
              <Text>Blends aesthetics and creating visually stunning solutions.</Text>
              <Text>benjamin@wealthcreation.com</Text>
              <Button mode="contained" style={styles.button}>Contact</Button>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: '#4d63d1',
    padding: 20,
    alignItems: 'center',
  },
  teamHeader: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 18,
    fontWeight: 'bold',
  },
  scrollContainer: {
    flexDirection: 'column', // Display items vertically
    alignItems: 'center', // Center items horizontally
  },
  cardContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    padding: 10,
  },
  card: {
    width: '80%', // Adjust the width as per your preference
    marginBottom: 20,
    borderWidth: 2,
     borderColor: 'black',
     borderRadius: 10,
  },
  image: {
    width: '100%',
    height: 150,
    resizeMode: 'cover',
  },
  cardContent: {
    padding: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 5,
  },
  role: {
    textAlign: 'center',
    fontWeight: '500'
  },
});

export default AboutUs;
