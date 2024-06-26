import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, SectionList } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <SectionList 
        sections={[
          {
            title: 'Grupo A',
            data: [
              { key: '1', name: 'Luis' },
              { key: '2', name: 'Saimon' },
              { key: '3', name: 'Yorch' },
              { key: '4', name: 'Nestor' },
              { key: '5', name: 'Markitos' },
            ],
          },
          {
            title: 'Grupo B',
            data: [
              { key: '6', name: 'Ismael' },
              { key: '7', name: 'Serafin' },
              { key: '8', name: 'Cheyo' },
              { key: '9', name: 'Niño' },
              { key: '10', name: 'Flaco' },
            ],
          },
          {
            title: 'Grupo C',
            data: [
              { key: '11', name: 'Ivan Archivaldo' },
              { key: '12', name: 'Ovidio' },
              { key: '13', name: 'Alfredo' },
              { key: '14', name: 'Joaquin' },
              { key: '15', name: 'Edgar' },
            ],
          },
        ]}
        renderItem={({ item }) => <Text style={styles.item}>{item.name}</Text>}
        renderSectionHeader={({ section }) => <Text style={styles.sectionHeader}>{section.title}</Text>}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingTop: 40,
  },
  item: {
    padding: 10,
    fontSize: 24,
    height: 50,
    borderBottomWidth: 1,
    borderColor: '#CF87EA',
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 18,
    fontWeight: 'bold',
    backgroundColor: '#ddd',
  },
});
