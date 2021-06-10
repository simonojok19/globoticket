import 'react-native-gesture-handler';
import React from 'react';
import {StatusBar} from 'react-native';
import Home from './screens/Home';
import {NavigationContainer} from '@react-navigation/native';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" hidden />
      <NavigationContainer>

      </NavigationContainer>
    </>
  );
};

export default App;
