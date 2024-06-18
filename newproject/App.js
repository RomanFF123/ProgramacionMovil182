import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';



export default function App() {

  const[text, setText]= useState('valor Default')
  const[submit, setSubmit]= useState('')

  return (
    <View style={styles.container}>

      <Text> Componente TextInput: {submit} </Text>
     
     <TextInput style={styles.input} placeholder='Escribe algo...' onChangeText = { (t)=>setText(t) } value={text}/>
      
      <Button title='Presioname...' onPress={ ()=> {setSubmit(text); alert('texto enviado')}} />
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  input: {
     
    width: '80%',
    height: 40,
    borderBottomWidth: 1,
    borderBottomColor: '#CF87EA', 
  
  },
});