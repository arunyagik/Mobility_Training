import React, {useState} from 'react';
import {
  TouchableOpacity,
  View,
  TextInput,
  Dimensions,
  Text,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import DatePicker from '@react-native-community/datetimepicker';
import moment from 'moment';
function DateTimePicker(props) {
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  const [date1, setDate1] = useState(new Date());
  console.log('date1', date1);
  const onChange = (event, selectedDate) => {
    setShow1(true);
    const currentDate = selectedDate;

    setShow(Platform.OS === 'ios');

    setDate1(currentDate);
    props.setDate(
      moment(currentDate).format(
        props.mode == 'time' ? 'hh:mm A' : 'YYYY-MM-DD',
      ),
    );
  };

  const showDatepicker = () => {
    setShow(true);
  };

  return (
    <>
     {props.label && (
        <View style={{left: 8}}>
          <Text
            style={{
              color: '#aeaeae',
              fontSize: 15,
              fontFamily: FontFamily.Popinssemibold,
            }}>
            {props.label}
          </Text>
        </View>
      )}
      <TouchableOpacity onPress={showDatepicker} style={{width: '100%'}}>
        <View
          style={{
            height: props.height,
            borderRadius: props.borderRadius,
            borderWidth: 1,
            borderColor: props.borderColor,
            width: props.width,
            flexDirection: 'row',
            alignItems: 'center',
            alignSelf: 'center',
            backgroundColor: '#fff',
            height: props.height,
          }}>
          <TextInput
            editable={false}
            value={
              show1
                ? moment(date1).format(
                    props.mode == 'time' ? 'hh:mm:A' : 'DD-MM-YYYY',
                  )
                : props.placeholder
            }
            label="* Enter Date"
            style={{
              color: '#000',
              marginLeft: 15,
              top: 2,
              width: '100%',
              overflow: 'hidden',
            }}
            underlineColor={'transparent'}
            labelStyle={{fontSize: 11, color: '#000'}}
          />
          <View style={{position: 'absolute', right: 15}}>
            <Ionicons name="calendar-sharp" size={17} />
          </View>
        </View>
      </TouchableOpacity>
      {show && (
        <DatePicker
          {...props}
          testID="dateTimePicker"
          value={date1}
          mode={props.mode}
          is24Hour={false}
          onChange={onChange}
        />
      )}
    </>
  );
}

DateTimePicker.defaultProps = {
  width: '100%',
  format: 'DD-MM-YYYY',
  borderColor: 'grey',
  mode: 'date',
  borderRadius: 8,
  backgroundColor: 'white',
  height: 40,
  placeholder: 'Select Date & Time',
};

export default DateTimePicker;
