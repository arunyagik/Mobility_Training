import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Keyboard,
} from 'react-native';
import React, {useRef, useState} from 'react';
import {ImageAssets} from '../../assets/ImageAssets';
import TextInputs from '../../components/shared/inputs/TextInput';
import FullSizeButton from '../../components/shared/buttons/FullSizeButton';
import CountDownTimer from 'react-native-countdown-timer-hooks';
import {FontFamily} from '../../assets/fonts/FontFamily';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import Api from '../../assets/api/Api';
import {postData} from '../../assets/api/Request';
const OTPScreen = props => {
    const refTimer = useRef();

  const mobileNumber = props.route.params.mobileNumber;
  const [otpinput, setOtpinput] = useState();

  const handleSubmitOtp = async () => {
    try {
      if (otpinput.length === 0) {
        alert('Please enter OTP.');
      } else if (otpinput.length < 4) {
        alert('Please enter valid OTP.');
      } else {
        let params = {
          otp: otpinput,
          phone: mobileNumber,
        };
        let response = await postData({
          url: Api.userManagement.verifyotp,
          params,
          token: false,
        });

        if (response == null || response.statusCode == 400) {
          alert('Please enter valid OTP.');
        } else if (
          response.statusCode === 200 &&
          response.message === 'Login OK !!'
        ) {
          props.navigation.navigate('Dashboard', {response});
        }
      }
    } catch (err) {
      console.log('OTP SCREEN COMPONENT IN LINE NO 29', err);
    }
  };

  const handleResendOTP = async () => {
    setOtpinput('');
    let params = {
      isd_code: '+91',
      phone: mobileNumber,
    };
    try {
      const result = await postData({
        url: Api.userManagement.resentotp,
        params,
        token: false,
      });
      if (result.statusCode == 200) {
        // alert(result.message);
        alert ('OTP send Successfully')
        refTimer.current.resetTimer();
      } else {
        alert(result.message);
      }
    } catch (err) {
      console.log('OTP SCREEN COMPONENT IN LINE NO 70', err);
    }
  };
  const CELL_COUNT = 4;

  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });
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
        We have sent you a OTP to your registered mobile number to verify
      </Text>
      <View
        style={{
          height: '12%',
          //   backgroundColor:'red',
          width: '74%',
          alignSelf: 'center',
        }}>
        <CodeField
          ref={ref}
          {...props}
          onSubmitEditing={Keyboard.dismiss}
          value={otpinput}
          onChangeText={setOtpinput}
          cellCount={CELL_COUNT}
          keyboardType="number-pad"
          textContentType="oneTimeCode"
          renderCell={({index, symbol, isFocused}) => (
            <View style={[styles.cellRoot, isFocused && styles.focusCell]}>
              <Text
                key={index}
                onLayout={getCellOnLayoutHandler[index]}
                style={styles.cellText}>
                {symbol || (isFocused ? <Cursor /> : null)}
              </Text>
            </View>
          )}
        />
      </View>

      <FullSizeButton
        text={'Submit'}
        width={'75%'}
        onPress={() => {
          handleSubmitOtp();
        }}
      />

      <View style={{justifyContent: 'space-between', height: '30%'}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            top: 10,
            // backgroundColor:'red',
            width: '100%',
          }}>
          <Text style={{color: '#000'}}>Resend OTP in</Text>
          <TouchableOpacity>
            <Text
              style={{
                color: 'blue',
              }}>
              <>
                <CountDownTimer
                  ref={refTimer}
                  timestamp={60}
                  timerCallback={handleResendOTP}
                  containerStyle={{
                    height: 20,
                    width: 40,
                    justifyContent: 'center',
                    alignItems: 'flex-start',
                    // backgroundColor: 'red',
                  }}
                  textStyle={{
                    fontSize: 12,
                    color: 'blue',
                    fontFamily: FontFamily.TTCommonsMedium,
                    top: 0,

                    left: 1,
                  }}
                />
              </>
            </Text>
          </TouchableOpacity>
        </View>

        <Image
          source={ImageAssets.TrueSales_Logo}
          style={{alignSelf: 'center'}}
        />
      </View>
    </View>
  );
};

export default OTPScreen;

const styles = StyleSheet.create({
  cellRoot: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#eff4ff',
    borderRadius: 10,
    paddingHorizontal: 2,
  },
  cellText: {
    color: '#000',
    fontSize: 14,
    textAlign: 'center',
  },
  focusCell: {
    borderBottomColor: '#eff4ff',
    borderBottomWidth: 2,
  },
});
