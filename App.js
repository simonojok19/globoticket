import 'react-native-gesture-handler';
import React from 'react';
import {StatusBar} from 'react-native';
import Home from './screens/Home';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" hidden />
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home" headerMode="screen">
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
