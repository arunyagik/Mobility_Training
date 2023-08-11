import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import MI from 'react-native-vector-icons/MaterialIcons';
import {FontFamily} from '../../../assets/fonts/FontFamily';

const Header = props => {
  return (
    <LinearGradient
      colors={['#02c7c9', '#0bb8d4']}
      style={{
        paddingVertical: 18,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
      }}>
      <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 25}}>
        <TouchableOpacity>
          <MI
            style={{marginLeft: 5, color: '#fff'}}
            name={props.iconName}
            size={props.size}
          />
        </TouchableOpacity>
        <Text
          style={{
            color: '#fff',
            fontFamily: FontFamily.PopinsMedium,
            fontSize: 17,
            marginLeft: 5,
          }}>
          {props.text}
        </Text>
      </View>
    </LinearGradient>
  );
};

export default Header;

const styles = StyleSheet.create({});
