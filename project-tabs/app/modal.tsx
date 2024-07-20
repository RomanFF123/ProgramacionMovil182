import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, Button, Alert } from 'react-native';
import { Text, View } from '@/components/Themed';
import { useNavigation } from '@react-navigation/native';

export default function ModalScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Menu de Opciones</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />

      <Button title="Opción 1: Ir a Tab One" onPress={() => navigation.navigate('index')} />
      <Button title="Opción 2: Ir a Tab Two" onPress={() => navigation.navigate('two')} />
      <Button title="Opción 3: Ir a Tab Three" onPress={() => navigation.navigate('three')} />
      <Button title="Opción 4: Mostrar Alerta" onPress={() => Alert.alert('Opción 4', 'Esta es una alerta de ejemplo')} />

      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
