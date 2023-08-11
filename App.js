import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import MainNavigationStack from './src/navigation/mainNavigationStack/MainNavigationStack';
import { Provider } from 'react-redux';
import { Store_addCase } from './src/helper/utils/redux/Store_addCase';
import Store from './src/helper/utils/redux/Store';
// import Store from './src/helper/utils/redux/Store';

const App = () => {
  return (
    <Provider store={Store_addCase}>
   <MainNavigationStack/>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({});
