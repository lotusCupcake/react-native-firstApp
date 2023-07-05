import React from "react"
import { View,ScrollView } from "react-native"
import SampleComponent from "./SampleComponent";
import StylingReactNativeComponent from "./StylingReactNativeComponent";
import MateriFlexBox from "./MateriFlexBox";

function App() {
  return (
    <View>
      <ScrollView>
        {/* <SampleComponent />
        <StylingReactNativeComponent /> */}
        <MateriFlexBox />
      </ScrollView>
    </View>
  )
}

export default App