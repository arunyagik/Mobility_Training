import {View, Text, TouchableOpacity} from 'react-native';
import React, {useRef} from 'react';
import BasicTacbel from '../components/shared/tabel/BasicTacbel';
import {FontFamily} from '../assets/fonts/FontFamily';
import ToggelButtons from '../components/shared/buttons/ToggelButtons/ToggelButtons';
import {useDispatch, useSelector} from 'react-redux';
const RbsheetTest = props => {
  //     const {appVirsion}=useSelector(state=>state.ChangeAppVersion)
  // console.log('APPVERSION=====>',appVirsion)

  const dispatch = useDispatch();
  const obj = [
    {firstName: 'Arun', age: 20},
    {firstName: 'TArun', age: 22},
    {firstName: 'Ansh', age: 22},
  ];

  const refRBSheet = useRef();

  const handleClick = () => {
    refRBSheet.current.open();
    dispatch({type: 'CHANGE_APP_VERSION', payload: '56789'});
  };

  const [Toggel, setToggel] = React.useState(false);
  const [Toggel2, setToggel2] = React.useState(false);

  const MyFun = () => {
    return (
      <View>
        <View
          style={{
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontFamily: FontFamily.TTCommonsExtraBold,
              fontSize: 17,
              color: Toggel ? '#fff' : '#000',
            }}>
            Dark Mode
          </Text>
        </View>
        <View style={{alignItems: 'center'}}>
          <Text style={{color: Toggel ? '#fff' : '#000'}}>
            __________________________________________________________
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            margin: 5,
            justifyContent: 'space-between',
          }}>
          <Text
            style={{
              fontSize: 16,
              fontFamily: FontFamily.TTCommonsMedium,
              color: Toggel ? '#fff' : '#000',
            }}>
            Dark Mode
          </Text>

          <ToggelButtons setToggelButton={setToggel} ToggelButton={Toggel} />
        </View>
        <View
          // onPress={()=>{{Linking.openSettings()}}}
          style={{
            flexDirection: 'row',
            margin: 5,
            justifyContent: 'space-between',
            top: 10,
          }}>
          <Text
            style={{
              fontSize: 16,
              fontFamily: FontFamily.TTCommonsMedium,
              color: Toggel ? '#fff' : '#000',
            }}>
            Use device Settings
          </Text>
          <View>
            <ToggelButtons
              setToggelButton={setToggel2}
              ToggelButton={Toggel2}
            />
          </View>
        </View>
        <View style={{margin: 5, width: '90%'}}>
          <Text
            style={{
              fontFamily: FontFamily.PopinsExtraLight,
              color: Toggel ? '#fff' : '#000',
            }}>
            settings, logging configuration, where to find static files,
            {}
          </Text>
        </View>
        <Text
          style={{
            margin: 5,
            fontFamily: FontFamily.TTCommonsExtraBold,
            color: Toggel ? '#fff' : '#000',
            fontSize: 19,
          }}>
          Theme
        </Text>
      </View>
    );
  };



  return (
    <TouchableOpacity
      //   onPress={() => {
      // refRBSheet.current.open();
      //   }}
      onPress={() => {
        handleClick();
      }}>
      <Text style={{alignSelf: 'center'}}>RbsheetTest</Text>

      <BasicTacbel
        conntent={obj}
        refRBSheet={refRBSheet}
        backgroundColor={Toggel ? '#1e2a38' : '#fff'}
        backgroundColorDesh={Toggel ? '#fff' : '#000'}>
        <MyFun />
      </BasicTacbel>
      {/* <BasicTacbel
          refRBSheet={refRBSheet}
          content={<MyFun/>}
          backgroundColor={Toggel ? '#1e2a38' : '#fff'}
          backgroundColorDesh={Toggel ? '#fff' : '#000'}
        >
    
      </BasicTacbel> */}
    </TouchableOpacity>
  );
};

export default RbsheetTest;
