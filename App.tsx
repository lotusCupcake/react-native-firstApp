import React, { Component } from "react"
import { Image, StyleSheet, Text, TextInput, View } from "react-native"
import cat from './cat.jpg'

function App() {
  return <StylingReactNativeComponent />
}

const StylingReactNativeComponent = () => {
  return(
  <View>
      <View style={{padding:12, backgroundColor:'#F2F2F2', width:212, borderRadius:8}}>
        <Image source={cat} style={{ width: 188, height: 107, borderRadius: 8 }} />
        <Text style={{fontSize:14,fontWeight:'bold',color:'black',marginTop:16}}>New Cat Available</Text>
        <Text style={{fontSize:12,fontWeight:'bold',color:'#F2994A',marginTop:16}}>Rp. 500.000</Text>
        <Text style={{fontSize:12,fontWeight:'bold',color:'black',marginTop:12}}>Medan</Text>
        <View style={{backgroundColor:'#6FCF97',paddingVertical:6,borderRadius:25,marginTop:20}}>
          <Text style={{fontSize:14,fontWeight:'400',color:'white','textAlign':'center'}}>BELI</Text>
      </View>
      </View>
  </View>
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    fontWeight: "bold",
    color: "green",
    marginLeft: 20,
    marginTop: 20,
  }
})

const SampleComponent = () => {
  return (
    <View>
      <View style={{width:80, height:80,backgroundColor:'red'}} />
      <Text>Fikri</Text>
      <Ansari/>
      <Photo />
      <TextInput style={{ marginTop: 15, borderWidth: 1 }} />
      <BoxGreen/>
      <Profile />
    </View>
  )
}

const Ansari = () => {
  return <Text>Ansari</Text>
}

const Photo = () => {
  return <Image
    source={{ uri: 'https://loremflickr.com/640/360' }}
    style={{ width: 100, height: 100 }}
  />
}

class BoxGreen extends Component{
  render() {
    return <Text>Ini merupakan contoh komponen menggunakan class</Text>
  }
}

class Profile extends Component{
  render() {
    return (
      <View style={{alignItems:"center",marginTop: 15}}>
        <Image
          source={{ uri: 'https://placekitten.com/640/360' }}
          style={{ width: 100, height: 100,borderRadius:50 }}
        />
        <Text style={{ color:'blue',fontSize:20 }}>Kucing lucu</Text>
      </View>)
  }
}

export default App