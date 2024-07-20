import React, { useState } from 'react';
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import { Text } from '@/components/Themed';

const newsData = [
  { 
    id: '1', 
    title: 'Juan Soto en Yankees', 
    description: 'The Yankees achieved a major victory in last night’s game.', 
    imageUrl: 'https://phantom-marca-us.unidadeditorial.es/45dea45dd57347b29f7e03fa293bf659/resize/828/f/jpg/assets/multimedia/imagenes/2024/04/05/17123430839175.jpg' 
  },
  { 
    id: '2', 
    title: 'All Star Game', 
    description: 'La liga Americana gana el juego de Estrellas', 
    imageUrl: 'https://storage.googleapis.com/static.elsoldemexico.com.mx/elesto/2024/07/Dos-mexicanos-estaran-presentes-en-el-MLB-All-Star-Game.png' 
  },
];

export default function TabOneScreen() {
  const [news, setNews] = useState(newsData);

  const renderItem = (item) => (
    <TouchableOpacity 
      key={item.id} 
      style={styles.card}
    >
      <Image source={{ uri: item.imageUrl }} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Baseball Noticias</Text>
      {news.map(renderItem)}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  card: {
    marginBottom: 20,
    borderRadius: 10,
    overflow: 'hidden',
    elevation: 2, 
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
  image: {
    width: '100%',
    height: 150,
  },
  textContainer: {
    padding: 15,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 14,
    color: '#555',
  },
});
