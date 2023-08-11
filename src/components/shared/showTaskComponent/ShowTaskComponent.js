import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {FontFamily} from '../../../assets/fonts/FontFamily';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Show =( item,index )=> {
//   console.log(item.item.item.text)
  const handleDelete = () => {
    item.myFun(item.item.index);
    // console.log ('============>',JSON.stringify(item.item.index))

  };

  const handleEdit=()=>{
  item.myEditFun(item.item.item.text,item.item.index)
// console.log('------------->',item.item.index)
  }

  return (
    <View
      style={{
        // width: 69,
        // margin: 5,
        // padding: 2,
        // backgroundColor: 'green',
        // borderRadius: 10,
        borderWidth: 1.5,
        borderColor: 'skyblue',
        margin: 5,
        height:40
      }}>
      <View
        style={{flexDirection: 'row', backgroundColor: '#fff', width: '100%',height:'100%'}}>
        {/* <Text>{props.item.size}</Text> */}
        <View
          style={{
            // width: 72,

            borderRadius: 5,
            //   padding: 5,
            width: '70%',
            justifyContent:"center"
            // backgroundColor: 'yellow',
          }}>
          <Text
            style={{
              fontFamily: FontFamily.PopinsExtraLight,
            //   alignSelf: 'flex-start',
        
            }}>
            {item.item.item.text}
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            // backgroundColor: 'yellowgreen',
            width: '28%',
          }}>
          <TouchableOpacity
          onPress={()=>handleEdit()}
            style={{
              alignSelf: 'center',
              fontFamily: FontFamily.Popinsbold,
            }}>
            <Icon
              name={item.item.item.Edit}
              style={{color: '#000', fontSize: 22, marginRight: 10}}
            />
          </TouchableOpacity>
          <TouchableOpacity
onPress={()=>{handleDelete()}}

            style={{
              alignSelf: 'center',
              fontFamily: FontFamily.Popinsbold,
            }}>
            <Icon
              name={item.item.item.delete}
              style={{color: '#000', fontSize: 22, marginRight: 10}}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

// const data = [
//   {text: 'kljslkjsdfl', Edit: 'square-edit-outline', delete: 'delete'},
//   {text: 'hhhhhhhhhh', Edit: 'square-edit-outline', delete: 'delete'},
// ];

const ShowTaskComponent = props => {
 

  return (
    <View>
      <View
        style={{
          //   flexDirection: 'row',
          //   alignItems: 'center',
          //   backgroundColor: 'skyblue',
          //   width: '99%',
          margin: 7,
          //   padding: 3,
          //   alignSelf: 'center',
        }}>
        <FlatList
 
          numColumns={'1'}
          data={props.data}
          renderItem={({item,index}) => (
            <Show
              item={{item,index}}
              myEditFun={props.myEditFun}
              myFun={props.myFun}
            
            />
          )}
        //   keyExtractor={item => item.id}
        keyExtractor={(item, index) => index}

        />
      </View>
    </View>
  );
};

export default ShowTaskComponent;
