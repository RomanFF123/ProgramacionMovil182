import { Entypo, FontAwesome5 } from '@expo/vector-icons';
import React, { useState, useRef } from 'react';
import { View, Text, Dimensions, TouchableOpacity } from 'react-native';
import { BottomSheetModal, BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const { width, height } = Dimensions.get("window");

export default function App() {
  const rmodal = useRef(null);

  const hey = () => {
    rmodal?.current?.present();
  };

  const snapPoints = [height * 0.4, height * 0.6, height * 0.9];

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <BottomSheetModalProvider>
        <BottomSheetModal
          ref={rmodal}
          snapPoints={snapPoints}
        >
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Contenido del Bottom Sheet</Text>
          </View>
        </BottomSheetModal>

        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            onPress={hey}
            style={{
              width: width * 0.3,
              height: height * 0.1,
              backgroundColor: '#0088f0',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 10,
            }}
          >
            <Text style={{ color: '#fff' }}>Hola</Text>
          </TouchableOpacity>
        </View>
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
  );
}
