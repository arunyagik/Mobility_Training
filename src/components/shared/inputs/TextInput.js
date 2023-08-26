import React from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Dimensions,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {FontFamily} from '../../../assets/fonts/FontFamily';

const TextInputs = (props) => {
  return (
    <View contentContainerStyle={{flexGrow: 1}}>
      <KeyboardAvoidingView
        style={{ justifyContent: 'center'}}
        behavior="padding">
        <View
          style={[
            style.inputContainer,
            {
              width: props.width,
              height: props.height,
              backgroundColor: props.backgroundColor,
              borderRadius: props.borderRadius,
              borderColor: props.borderColor,
              alignSelf:'center'
            },
          ]}>
          {props.icon ? (
            <View style={{width: '12%', alignSelf: 'center'}}>
              <Icon
                name={props.iconName}
                style={{color: '#456df9', fontSize: 22, marginRight: 10}}
              />
            </View>
          ) : (
            <></>
          )}
          <View
            style={{
              width: '100%',
              flexWrap: 'wrap',
              alignSelf: 'flex-start',
              justifyContent: 'center',
            }}>
            <TextInput
              style={{
                color: '#000',
                width: '100%',
                fontFamily: FontFamily.TTCommonsMedium,
                fontSize: 12,
                height: props.HeightInputBox,
                top: props.TOPS,
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
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

TextInputs.defaultProps = {
  placeholder: 'PlaceHolder',
  width: '75%',
  height: 40,
  icon: false,
  iconColor: 'white',
  borderRadius: 10,
  textColor: 'white',
  backgroundColor: '#eff4ff',
  iconName: 'cellphone',
  borderColor: '#FFF',
  onChangeText: () => {},
};

export default TextInputs;

const style = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    paddingHorizontal: 15,
    borderWidth: 0.5,
  },
});
