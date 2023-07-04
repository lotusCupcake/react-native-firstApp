import React from "react"
import {Image, Text, TextInput, View} from "react-native"

const App = () => {
  return (
    <View>
      <View style={{width:80, height:80,backgroundColor:'red'}} />
      <Text>Fikri</Text>
      <Ansari/>
      <Photo />
      <TextInput style={{marginTop:15,borderWidth: 1}}/>
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

export default App