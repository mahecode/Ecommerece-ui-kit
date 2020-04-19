/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import 'react-native-gesture-handler';
import MainApp from './src/main-app';
import store from './src/store/store';

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <MainApp />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
