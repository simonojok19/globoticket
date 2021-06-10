import React from 'react';
import {StatusBar} from 'react-native';
import Home from './screens/Home';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" hidden />
      <Home username="Sports Fan" />
    </>
  );
};

export default App;
