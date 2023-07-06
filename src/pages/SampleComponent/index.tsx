/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React, { Component } from 'react';
import { View, Text, TextInput, Image } from 'react-native';

const SampleComponent = () => {
  return (
    <View>
      <View style={{ width: 80, height: 80, backgroundColor: 'red' }} />
      <Text>Fikri</Text>
      <Ansari />
      <Photo />
      <TextInput style={{ marginTop: 15, borderWidth: 1 }} />
      <BoxGreen />
      <Profile />
    </View>
  );
};

const Ansari = () => {
  return <Text>Ansari</Text>;
};

const Photo = () => {
  return (
    <Image
      source={{ uri: 'https://loremflickr.com/640/360' }}
      style={{ width: 100, height: 100 }}
    />
  );
};

class BoxGreen extends Component {
  render() {
    return <Text>Ini merupakan contoh komponen menggunakan class</Text>;
  }
}

class Profile extends Component {
  render() {
    return (
      <View style={{ alignItems: 'center', marginTop: 15 }}>
        <Image
          source={{ uri: 'https://placekitten.com/640/360' }}
          style={{ width: 100, height: 100, borderRadius: 50 }}
        />
        <Text style={{ color: 'blue', fontSize: 20 }}>Kucing lucu</Text>
      </View>
    );
  }
}

export default SampleComponent;
