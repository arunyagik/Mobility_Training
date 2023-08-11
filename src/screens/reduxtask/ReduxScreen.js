import {View, Text, TextInput} from 'react-native';
import React, {useRef} from 'react';
import Input from '../../components/shared/inputs/Input';
import FullSizeButton from '../../components/shared/buttons/FullSizeButton';
import ShowTaskComponent from '../../components/shared/showTaskComponent/ShowTaskComponent';
import {useDispatch, useSelector} from 'react-redux';
import {TextDATA, updateText} from '../../helper/utils/redux/slice/TextSlice';
import {deleteText} from '../../helper/utils/redux/slice/TextSlice';
import BasicTacbel from '../../components/shared/tabel/BasicTacbel';
import {FontFamily} from '../../assets/fonts/FontFamily';
import {fullfillText} from '../../helper/utils/redux/slice/TextSlice';
const ReduxScreen = () => {
  const [text, setText] = React.useState('');
  const [editedText, setEditedText] = React.useState('');

  //   alert (newText)
  const refRBSheet = useRef();
  const dispatch = useDispatch();

  var getText = useSelector(state => state.TextSlice.textData);
  

  var fullfillText1 = useSelector(state => state.TextSlice.fullfillText);


  const handleText = txt => {
    setText(txt);
  };
  const handleSubmit = ind => {
    dispatch(
      TextDATA({
        text: text,
        Edit: 'square-edit-outline',
        delete: 'delete',
      }),
    );
  };
  //   console.log(...getText)
  const myFun = index => {
    // let aa=...getText
    dispatch(deleteText(index));
  };

  const myEditFun = (edit,index) => {
    // console.log('======================>',edit,index)
    dispatch(updateText({ index, newText: edit }))
    refRBSheet.current.open();

    // setEditedText(edit)
    // alert (edit)
  };

  const Rbsheet = () => {
    const newHandleText = () => {
        dispatch(
            TextDATA({
              text: fullfillText1,
              Edit: 'square-edit-outline',
              delete: 'delete',
            }),
          );
    };
    const newHandelChangeText = newtxt => {
        dispatch(fullfillText(newtxt));
        
    };
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
            }}>
            Tasks Status
          </Text>
        </View>
        <View style={{alignItems: 'center'}}>
          <Text>
            __________________________________________________________
          </Text>
        </View>
        <View style={{alignItems: 'center'}}>
          <Input
            borderColor={'skyblue'}
            backgroundColor={'#fff'}
            width={'100%'}
            onPressSubmit={() => {
              newHandleText();
            }}
            value={fullfillText1}
            onChangeText={txt => {
              newHandelChangeText(txt);
            }}
          />
        </View>
      </View>
    );
  };

  return (
    <View style={{backgroundColor: '#fff', width: '99%'}}>
      <Text style={{alignSelf: 'center', fontSize: 19, color: 'skyblue'}}>
        Tasks List
      </Text>
      <View
        style={{
          margin: 5,
          flexDirection: 'row',
          justifyContent: 'space-between',
          //   backgroundColor: 'yellowgreen',
          //   width: '100%',
        }}>
        <Input
          borderColor={'skyblue'}
          backgroundColor={'#fff'}
          width={'100%'}
          onPressSubmit={() => {
            handleSubmit();
          }}
          onChangeText={txt => {
            handleText(txt);
          }}
        />
      </View>
      <ShowTaskComponent data={getText} myFun={myFun} myEditFun={(edit, index) => myEditFun(edit, index)} />
      <BasicTacbel refRBSheet={refRBSheet}>
        <Rbsheet />
      </BasicTacbel>
    </View>
  );
};

export default ReduxScreen;
