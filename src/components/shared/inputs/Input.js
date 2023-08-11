import React from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Dimensions,
  KeyboardAvoidingView,
  ScrollView,
  Text,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {FontFamily} from '../../../assets/fonts/FontFamily';

const Input = (
  props,
  //   {
  //   label,
  //   iconName,
  //   error,
  //   password,
  //   heightText,
  //   widthText,
  //   backgroundColor,
  //   borderRadius,
  //   onFocus = () => {},
  //   ...props
  // }
) => {
  // const [hidePassword, setHidePassword] = React.useState(password);
  // const [isFocused, setIsFocused] = React.useState(false);
  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}}>
      <KeyboardAvoidingView style={{}}>
        {/* <View > */}
        <View
          style={[
            style.inputContainer,
            {
              width: props.width,
              height: props.height,
              backgroundColor: props.backgroundColor,
              borderRadius: props.borderRadius,
              borderColor: props.borderColor,
              borderWidth: 2,
              flexDirection: 'row',
              justifyContent: 'space-between',
            },
          ]}>
          {props.icon ? (
            <View style={{width: '12%', alignSelf: 'center'}}>
              <Icon
                name={props.iconName}
                style={{color: '#000', fontSize: 22, marginRight: 10}}
              />
            </View>
          ) : (
            <></>
          )}
          <View
            style={{
              width: '64%',
              flexWrap: 'wrap',
              alignSelf: 'flex-start',
              justifyContent: 'center',

              justifyContent: 'space-between',
              backgroundColor: '#fff',
            }}>
            <TextInput
              style={{
                color: '#000',
                width: '100%',
                fontFamily: FontFamily.TTCommonsMedium,
                fontSize: 14,
                height: props.HeightInputBox,
                top: props.TOPS,
                height: '120%',
              }}
              placeholder={props.placeholder}
              placeholderTextColor={props.placeholderColor}
              onChangeText={props.onChangeText}
              numberOfLines={5}
              textAlignVertical={props.TextTop}
              multiline={props.MULTILINE}
              keyboardType={props.keyboardType}
              maxLength={props.LENGTH}
              value={props.value}
            />
          </View>
          <TouchableOpacity
            onPress={
              props.onPressSubmit
            }
            style={{
              backgroundColor: 'skyblue',
              width: '40%',
            }}>
            <Text
              style={{
                alignSelf: 'center',
                textAlign: 'center',
                color: '#fff',
                fontSize: 15,
              }}>
              Submit
            </Text>
          </TouchableOpacity>
        </View>
        {/* </View> */}
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

Input.defaultProps = {
  placeholder: '',
  width: '100%',
  height: 35,
  icon: false,
  iconColor: 'white',
  borderRadius: 10,
  textColor: 'white',
  backgroundColor: 'rgba(0,0,0,0.1)',
  iconName: 'account-arrow-right-outline',
  borderColor: '#FFF',
  onChangeText: () => {},
  onPressSubmit: () => {},
};

export default Input;

const style = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    paddingHorizontal: 15,
    borderWidth: 0.5,
  },
});
