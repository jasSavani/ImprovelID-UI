/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import {
  SafeAreaView,
} from 'react-native';
import Route from './src/navigation';
import { LogBox } from 'react-native'
import {DataProvider} from './src/context'
LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
LogBox.ignoreAllLogs();//Ignore all log notifications
console.error = (error) => error.apply;

const App = () => {

  return (
    <DataProvider>
          <Route />
    </DataProvider>
  );
};


export default App;
