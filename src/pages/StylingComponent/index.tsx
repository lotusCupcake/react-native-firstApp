/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import cat from '../../assets/image/cat.jpg';

const StylingComponent = () => {
  return (
    <View>
      <Text style={styles.text}>Styling Component</Text>
      <View
        style={{
          width: 100,
          height: 100,
          backgroundColor: 'yellow',
          borderWidth: 2,
          borderColor: 'blue',
          marginTop: 20,
          marginLeft: 20,
        }}
      />
      <View
        style={{
          padding: 12,
          backgroundColor: '#F2F2F2',
          width: 212,
          borderRadius: 8,
        }}>
        <Image
          source={cat}
          style={{ width: 188, height: 107, borderRadius: 8 }}
        />
        <Text
          style={{
            fontSize: 14,
            fontWeight: 'bold',
            color: 'black',
            marginTop: 16,
          }}>
          New Cat Available
        </Text>
        <Text
          style={{
            fontSize: 12,
            fontWeight: 'bold',
            color: '#F2994A',
            marginTop: 16,
          }}>
          Rp. 500.000
        </Text>
        <Text
          style={{
            fontSize: 12,
            fontWeight: 'bold',
            color: 'black',
            marginTop: 12,
          }}>
          Medan
        </Text>
        <View
          style={{
            backgroundColor: '#6FCF97',
            paddingVertical: 6,
            borderRadius: 25,
            marginTop: 20,
          }}>
          <Text
            style={{
              fontSize: 14,
              fontWeight: '400',
              color: 'white',
              textAlign: 'center',
            }}>
            BELI
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'green',
    marginLeft: 20,
    marginTop: 20,
  },
});

export default StylingComponent;
