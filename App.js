import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import P1 from './screen/Page1';
import P2 from './screen/Page2';
import P3 from './screen/Page3';
import P4 from './screen/Page4';

const Stack = createStackNavigator();
class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
    headerShown: false
  }}>
          <Stack.Screen name="Page1" component={P1} />
          <Stack.Screen name="Page2" component={P2} />
          <Stack.Screen name="Page3" component={P3} />
          <Stack.Screen name="Page4" component={P4} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  MainView: {
    flex: 1,
    alignContent: 'center',
  },
});

export default App;
