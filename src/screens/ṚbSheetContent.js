import React, {useRef} from 'react';
import {View, Button, Text, Linking, TouchableOpacity} from 'react-native';
import { FontFamily } from '../assets/fonts/FontFamily';
export default function RbSheetContent(props) {
    console.log('props',props.ToggelButton)
  const refRBSheet = useRef();
  const [Toggel, setToggel] = React.useState(false);
  const [Toggel2, setToggel2] = React.useState(false);
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'skyblue',
      }}>
      {/* <Button
        title="OPEN BOTTOM SHEET"
        onPress={() =>refRBSheet.current.open()}
      /> */}
      
    
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
            {props.title}
            {/* Dark Mode */}
          </Text>
        </View>
        <View style={{alignItems: 'center'}}>
          <Text style={{color: Toggel ? '#fff' : '#000'}}>
          {props.desh}
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
            {/* {props.content} */}
            {/* Dark Mode */}
          </Text>

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
            {/* {props.secondTitle} */}
          </Text>
        <View>
          
          </View>
        </View>
        <View style={{margin: 5, width: '90%'}}>
          <Text
            style={{
              fontFamily: FontFamily.PopinsExtraLight,
              color: Toggel ? '#fff' : '#000',
            }}>
            settings, logging configuration, where to find static files,
                {/* // props.Discriptions */}
            
          </Text>
        </View>
        <Text
          style={{
            margin: 5,
            fontFamily: FontFamily.TTCommonsExtraBold,
            color: Toggel ? '#fff' : '#000',
            fontSize: 19,
          }}>
         {/* {props.theme} */}
         Theme
        </Text>
   
    </View>
  );
}

RbSheetContent.defaultProps = {
  title: 'Dark Mode',
  content: 'Dark Mode',
  toogle1show:true,
  secondTitle:'Use device Settings',
  toggelButtun2:true,
  Discriptions:'settings, logging configuration, where to find static files,',
  theme:'Theme',
  desh:'  __________________________________________________________'

};
