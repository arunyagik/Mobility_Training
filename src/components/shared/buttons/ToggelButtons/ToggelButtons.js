import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';

const ToggelButton = (props) => {
  const [ToggelButton, setToggelButton] = useState(false);
  const handlePress = () => {
   props.setToggelButton(!props.ToggelButton);
  };
  return (
    <View
      style={{
        backgroundColor: props.ToggelButton ? 'green' : 'grey',
        width: 45,
        height: 20,
        borderRadius: 40,
      }}>
      <TouchableOpacity
        onPress={() => {
          handlePress();
        }}
        style={{
          backgroundColor: '#fff',

          width: 23,
          height: 20,
          borderRadius: 40,
          alignSelf: props.ToggelButton ? 'flex-end' : 'flex-start',
          borderWidth: 2,
          borderColor: 'grey',
        }}></TouchableOpacity>
    </View>
  );
};

export default ToggelButton;
