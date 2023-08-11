import React, {useRef} from 'react';
import {View, Button, Text, Linking, TouchableOpacity} from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import {FontFamily} from '../../../assets/fonts/FontFamily';
import { set } from 'react-native-reanimated';
export default function BasicTacbel(props) {

    console.log("props childrens",props.conntent)

  const refRBSheet = useRef();

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

      <RBSheet
        height={350}
        ref={props.refRBSheet}
   
        closeOnDragDown={true}
        closeOnPressMask={false}
        customStyles={{
          wrapper: {
            backgroundColor: 'transparent',
          },
          container: {
            padding: 15,
            width: '100%',
            borderTopLeftRadius: 40,
            borderTopRightRadius: 40,
           backgroundColor: props.backgroundColor,
          },
          draggableIcon: {
            backgroundColor:  props.backgroundColorDesh 
          },
        }}>
      
        {props.children}
      </RBSheet>
    </View>
  );
}

BasicTacbel.defaultProps = {
  content: (
    <View>
      <Text>Enter RBsheet Content Here</Text>
    </View>
  ),
  backgroundColor:'#fff',
  backgroundColorDesh:'000'
};
