import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {FontFamily} from '../../../../assets/fonts/FontFamily';

const Size = props => {
  // const changeBackground = props.score == props.item.score;
  const handleClick = () => {
    props.myFun(props.item.index, props.item.score);
  };

  return (
    <View
      style={{
        width: 69,
        margin: 5,
        padding: 2,
        // backgroundColor: 'green',
        borderRadius: 10,
      }}>
      <TouchableOpacity style={{flexDirection: 'row'}}>
        {/* <Text>{props.item.size}</Text> */}
        <TouchableOpacity
          onPress={() => {
            // console.log('props.item.score',props.item.score)
            props.setScore(props.item.score);
            handleClick();
          }}
          style={{
            backgroundColor:
              props.SecondData == props.item.score ? '#3e8afb' : '#fff',
            height: 45,
            width: 72,
            justifyContent: 'center',
            borderRadius: 5,
            //   padding: 5,
            margin: 5,

            //   backgroundColor:'yellow'
          }}>
          <Text
            style={{
              alignSelf: 'center',
              fontFamily: FontFamily.PopinsExtraLight,
              color: props.SecondData == props.item.score ? '#fff' : 'grey',
              top: 5,
            }}>
            {props.item.text}
          </Text>
          <Text
            style={{
              alignSelf: 'center',
              fontFamily: FontFamily.Popinsbold,
              color: props.SecondData == props.item.score ? '#fff' : 'grey',
            }}>
            {props.item.score}
          </Text>
        </TouchableOpacity>
      </TouchableOpacity>
    </View>
  );
};

const RadioButton = props => {
  const [score, setScore] = useState();

  // const aa = props.scores;
  // console.log('AAAAAAAAA',aa)

  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          //   alignItems: 'center',
          backgroundColor: '#ecf9fb',
          width: '99%',
          margin: 7,
          padding: 3,
          alignSelf: 'center',
        }}>
        <FlatList
          numColumns={'5'}
          //   horizontal={true}
          //   showsHorizontalScrollIndicator={false}
          data={props.scores}
          renderItem={({item}) => (
            <Size
              item={item}
              setScore={setScore}
              score={score}
              myFun={props.myFun}
              SecondData={props.SecondData}
            />
          )}
          keyExtractor={item => item.id}
        />
      </View>
    </View>
  );
};

export default RadioButton;
