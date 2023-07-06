/* eslint-disable prettier/prettier */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, Image, Text } from 'react-native';
import chart from '../../assets/icon/chart.png';

const Position = () => {
  const Cart = () => (
    <Image
      source={chart}
      style={{ width: 98, height: 80, position: 'relative' }}
    />
  );
  return (
    <View style={{ alignItems: 'center' }}>
      <View
        style={{
          borderWidth: 2,
          borderColor: 'black',
          width: 150,
          height: 150,
          borderRadius: 120,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Cart />
        <Text
          style={{
            fontSize: 20,
            backgroundColor: 'green',
            color: 'white',
            padding: 5,
            borderRadius: 25,
            position: 'absolute',
            top: 0,
            right: 0,
          }}>
          10
        </Text>
      </View>
      <Text style={{ fontSize: 20, color: 'black', marginTop: 10 }}>
        Keranjang Belanja Anda
      </Text>
    </View>
  );
};

export default Position;
