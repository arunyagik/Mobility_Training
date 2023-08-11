import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

import {DrawerContentScrollView} from '@react-navigation/drawer';

import {navigate} from '../NavigationDrw/NavigationService';

import {
  DrawerActions,
  useNavigation,
  NavigationContainer,
  DefaultTheme as NavigationDefaultTheme,
  DarkTheme as NavigationDarkTheme,
  DarkTheme,
  DefaultTheme,
} from '@react-navigation/native';
const DrawerContent = props => {
  return (
    <DrawerContentScrollView
      scrollEnabled={false}
      showsVerticalScrollIndicator={false}
      style={{
        backgroundColor: '#000',
        borderTopRightRadius: 35,
        borderBottomRightRadius: 35,
        overflow: 'hidden',
        width: '100%',
        backgroundColor: '#fff',
        borderColor: '#fff',
        borderWidth: 1,
      }}
      {...props}>
      <View>
        <Text style={{color: 'red'}}>Drawer Contents</Text>
      </View>
    </DrawerContentScrollView>
  );
};

export default DrawerContent;

const styles = StyleSheet.create({});
