import React from 'react';
import {ScrollView, View} from 'react-native';
import SampleComponent from './pages/SampleComponent';
import StylingComponent from './pages/StylingComponent';
import FlexBox from './pages/FlexBox';
import Position from './pages/Position';

const App = () => {
  return (
    <ScrollView>
      <View>
        <SampleComponent />
        <StylingComponent />
        <FlexBox />
        <Position />
      </View>
    </ScrollView>
  );
};

export default App;
