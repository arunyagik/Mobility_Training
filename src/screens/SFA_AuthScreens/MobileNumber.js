import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {ImageAssets} from '../../assets/ImageAssets';
import TextInputs from '../../components/shared/inputs/TextInput';
import FullSizeButton from '../../components/shared/buttons/FullSizeButton';
import Api from '../../assets/api/Api';
import { postData } from '../../assets/api/Request';

const MobileNumber = props => {
  const [text, setText] = React.useState();
  // console.log(text)

  const handleSendOtp =async () => {
    try {
      const base_url='https://vega-uat-b39323c49627.herokuapp.com'
      if (text.length === 0) {
        alert('Please enter your mobile number.');
      } else if (text.length < 10) {
        alert('Please enter valid mobile number.');
      } else {
        if (base_url) {
        
          let params = {
            isd_code: '+91',
            phone: text,
          };
          let response = await postData({
            url: Api.userManagement.loginwithmobile,
            params,
            token: false,
            base_url: base_url,
          });
          
          if (response == null) {
           
            alert('Something went wrong! ,please try again laterrr.');
          } else if (response.statusCode === 404) {
          
            AlertDanger('invalid url');
          } else if (response.statusCode === 400) {
          
            alert(`${response.message}`);
          } else if (response.statusCode === 200) {
           
            alert('OTP Sent Successfully');
          
          
            
          props.navigation.navigate('OTPScreen', { mobileNumber: text });
          }
        } else {
       
          AlertDanger('No connection');
        }
      }
    }  catch (err) {

console.log('Error in MobileNumber Component LINE NO 20',err)

    }
  };
  return (
    <View style={{backgroundColor: '#fff', height: '100%'}}>
      <View style={{height: '20%'}}></View>

      <View style={{alignSelf: 'center', height: '22%'}}>
        <Image source={ImageAssets.Zydus_Wellness} />
      </View>

      <Text
        style={{
          width: '71%',
          alignSelf: 'center',
          color: '#000',
          height: '8%',
        }}>
        Please enter your registered mobile number to get sign in to your
        account
      </Text>
      <View
        style={{
          height: '7%',
        }}>
        <TextInputs
          icon
          placeholder={'Enter Mobile Number'}
          keyboardType={'numeric'}
          onChangeText={setText}
          LENGTH={10}
          // value={text}
        />
      </View>
      <View style={{justifyContent: 'space-between', height: '43%'}}>
        <FullSizeButton
          text={'Send OTP'}
          width={'75%'}
          onPress={() => {
            handleSendOtp();
          }}
        />
        <Image
          source={ImageAssets.TrueSales_Logo}
          style={{alignSelf: 'center'}}
        />
      </View>
    </View>
  );
};

export default MobileNumber;

const styles = StyleSheet.create({});
