import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import FTI from 'react-native-vector-icons/Fontisto';
import {FontFamily} from '../../../assets/fonts/FontFamily';

const FullSizeButton = props => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <LinearGradient
        colors={['#02c7c9', '#0bb8d4']}
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 30,
          paddingVertical: 12,
          // width:'100%'
          width:props.width,
          
        }}>
          <FTI
          style={{marginLeft: 5, color: '#fff'}}
          name={props.icon}
          size={props.size}
        />
        <Text
          style={{
            color: '#fff',
            fontFamily: FontFamily.PopinsMedium,
            fontSize: 18,
          }}>
          {props.text}
        </Text>
        <FTI
          style={{marginLeft: 5, color: '#fff'}}
          name={props.iconName}
          size={props.size}
        />
        
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default FullSizeButton;

var styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
});
