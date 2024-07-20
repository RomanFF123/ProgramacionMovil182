import React from 'react';
import { StyleSheet, View, Text, Image, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const user = {
  name: 'Román Ferrusquia',
  email: 'ferrusquiaroman@gmail.com',
  profileImageUrl: 'https://media.licdn.com/dms/image/C5603AQEm7OyaRU5hdw/profile-displayphoto-shrink_200_200/0/1661142051769?e=2147483647&v=beta&t=OZMsWSIcMhtQT7xqOCZT8vB8QlY_7itg1caDQfVH6yU',
};

export default function ThreeScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Image source={{ uri: user.profileImageUrl }} style={styles.profileImage} />
      <Text style={styles.name}>{user.name}</Text>
      <Text style={styles.email}>{user.email}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  email: {
    fontSize: 16,
    color: '#555',
    marginBottom: 20,
  },
});
