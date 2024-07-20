import { Entypo, FontAwesome5 } from '@expo/vector-icons';
import React, { useState, useRef } from 'react';
import { View, Text, Modal, Dimensions, TouchableOpacity } from 'react-native';
import { BottomSheetModal, BottomSheetModalProvider } from '@gorhom/bottom-sheet';

const { width, height } = Dimensions.get("window");

export default function Prueba() {
  const [modalVisible, setModalVisible] = useState(false);
  const rmodal = useRef(null);
   
  const hey = () => {
    rmodal?.current?.present();
  }

  return (
    <BottomSheetModalProvider>
      <BottomSheetModal ref={rmodal} snapPoints={[height * 0.4, height * 0.6, height * 0.9]}>
      </BottomSheetModal>
    <View
    style={{
      flex:1, 
      justifyContent: "center",
      alignItems: "center",
    }}
    >
      <TouchableOpacity>
        <Text>Hola</Text>
      </TouchableOpacity>
    </View>
    
    </BottomSheetModalProvider>
  );
}
