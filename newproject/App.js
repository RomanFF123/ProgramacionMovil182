import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, Alert, Pressable, ImageBackground } from 'react-native';

export default function App() {
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [input3, setInput3] = useState('');

  const handleSubmit = () => {
    console.log('Botón presionado');
    console.log(`Input 1: ${input1}, Input 2: ${input2}, Input 3: ${input3}`);
    Alert.alert(
      'Datos Enviados',
      `Input 1: ${input1}\nInput 2: ${input2}\nInput 3: ${input3}`
    );
  };



  return (
    <ImageBackground source={{ uri: 'https://images.pexels.com/photos/1624496/pexels-photo-1624496.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' }} style={styles.background}>
      <View style={styles.container}>
        <View style={styles.formContainer}>
          <Text style={styles.title}>Llena los siguientes campos</Text>

          <TextInput 
            style={styles.input} 
            placeholder='Nombre Completo' 
            onChangeText={(text) => setInput1(text)} 
            value={input1} 
          />

          <TextInput 
            style={styles.input} 
            placeholder='Email' 
            onChangeText={(text) => setInput2(text)} 
            value={input2} 
          />

          <TextInput 
            style={styles.input} 
            placeholder='Contraseña' 
            onChangeText={(text) => setInput3(text)} 
            value={input3} 
            secureTextEntry={true} 
          />

          <Pressable style={styles.button} onPress={handleSubmit}>
            <Text style={styles.buttonText}>Enviar</Text>
          </Pressable>

          <StatusBar style="auto" />
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
  },

  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },

  formContainer: {
    width: '90%',
    padding: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 10,
    alignItems: 'center',
  },

  title: {
    fontSize: 18,
    marginBottom: 20,
    fontWeight: 'bold',
  },

  input: {
    width: '100%',
    height: 40,
    borderBottomWidth: 1,
    borderBottomColor: '#CF87EA',
    marginVertical: 10,
  },

  button: {
    marginTop: 20,
    backgroundColor: '#CF87EA',
    padding: 10,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
  },

  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
