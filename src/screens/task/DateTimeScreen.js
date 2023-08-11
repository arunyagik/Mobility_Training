import {View, Text} from 'react-native';
import React from 'react';
import DateTimePicker from '../../components/shared/dateTimePicker/DateTimePicker';
const DateTimeScreen = () => {
  const [dob, setDob] = React.useState('');

  return (
    <View>
      <DateTimePicker setDate={setDob}  />
    </View>
  );
};

export default DateTimeScreen;
