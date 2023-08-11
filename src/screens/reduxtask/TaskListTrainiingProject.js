import {View, Text, TouchableOpacity} from 'react-native';
import React, {useRef} from 'react';
import Input from '../../components/shared/inputs/Input';
import {useDispatch, useSelector} from 'react-redux';
import BasicTacbel from '../../components/shared/tabel/BasicTacbel';
import {FontFamily} from '../../assets/fonts/FontFamily';

function TaskListRender({item, list, dispatch, index ,}) {
  const refRBSheet = useRef();

  //   console.log('===================>', item);
  const handleDelete = item => {
    dispatch({type: 'DELETE', payload: item});
  };
  const handleEdit = () => {
    refRBSheet.current.open();
  };
  return (
    <View
      style={{
        flexDirection: 'row',
        //   backgroundColor: 'yellow',
        justifyContent: 'space-between',
        margin: 7,
      }}>
      <Text style={{alignSelf: 'center'}}>{list[item]}</Text>
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity
          style={{margin: 7}}
          onPress={() => {
            handleEdit();
          }}>
          <Text>Edit</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{margin: 7}}
          onPress={() => {
            handleDelete(item);
          }}>
          <Text>Delete</Text>
        </TouchableOpacity>

        <BasicTacbel refRBSheet={refRBSheet}>
          <Rbsheet item={item} list={list} dispatch={dispatch} refRBSheet={refRBSheet} />
        </BasicTacbel>
      </View>
    </View>
  );
}

const Rbsheet = ({item, list, dispatch,refRBSheet}) => {
  const newHandleText = txt => {
    refRBSheet.current.close();
    // dispatch({type: 'STORE_TEXT', payload: [item, newtxt]});
  };
  const newHandelChangeText = newtxt => {
    dispatch({type: 'STORE_TEXT', payload: [item, newtxt]});
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
        <Text>__________________________________________________________</Text>
      </View>
      <View style={{alignItems: 'center'}}>
        <Input
          borderColor={'skyblue'}
          backgroundColor={'#fff'}
          width={'100%'}
          onPressSubmit={() => {
            newHandleText();
          }}
          value={list[item]}
          onChangeText={txt => {
            newHandelChangeText(txt);
          }}
        />
      </View>
    </View>
  );
};

const TaskListTrainiingProject = () => {
  const dispatch = useDispatch();

  const [text, setText] = React.useState([]);

  const {list} = useSelector(state => state.TaskListReducer);
  //   console.log(list);
  const handleText = txt => {
    setText(txt);
  };
  const handleSubmit = () => {
    setText('');
    dispatch({type: 'STORE_TEXT', payload: [`${new Date()}`, text]});
  };

  return (
    <View>
      <View style={{margin: 5}}>
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
          value={text}
        />
      </View>
      {Object.keys(list).map((item, index) => {
       
        return (
          <TaskListRender
            list={list}
            item={item}
            index={index}
            dispatch={dispatch}
          />
        );
      })}
    </View>
  );
};

export default TaskListTrainiingProject;
