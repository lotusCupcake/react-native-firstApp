import React from "react"
import { View,ScrollView, Image } from "react-native"
import SampleComponent from "./SampleComponent";
import StylingReactNativeComponent from "./StylingReactNativeComponent";
import MateriFlexBox from "./MateriFlexBox";
import PositionReactNative from "./PositionReactNative";


const App = () => {
  return (
        <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
        {/* <SampleComponent />
        <StylingReactNativeComponent />
        <MateriFlexBox /> */}
      <PositionReactNative/>
      </View>
  )
}

export default App