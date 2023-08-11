import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import React, {useEffect} from 'react';
import {add, set} from 'react-native-reanimated';
import {useDispatch, useSelector} from 'react-redux';
import {
  CalculatorDATA,
  CureentDATA,
} from '../../helper/utils/redux/slice/CalculatorSlice';
import ToggelButton from '../../components/shared/buttons/ToggelButtons/ToggelButtons';

data = [
  {label: 'AC', id: 0, width: '22%'},
  {label: '+-', id: 1, width: '22%'},
  {label: '%', id: 2, width: '22%'},
  {label: '/', id: 3, width: '22%'},
  {label: '7', id: 4, width: '22%'},
  {label: '8', id: 5, width: '22%'},
  {label: '9', id: 6, width: '22%'},
  {label: '*', id: 7, width: '22%'},
  {label: '4', id: 8, width: '22%'},
  {label: '5', id: 9, width: '22%'},
  {label: '6', id: 10, width: '22%'},
  {label: '-', id: 11, width: '22%'},
  {label: '1', id: 12, width: '22%'},
  {label: '2', id: 13, width: '22%'},
  {label: '3', id: 14, width: '22%'},
  {label: '+', id: 15, width: '22%'},
  {label: '0', id: 16, width: '47%'},
  {label: '.', id: 17, width: '22%'},
  {label: '=', id: 18, width: '22%'},
];
const Calculator = () => {
  const dispatch = useDispatch();
  const [Toggel, setToggel] = React.useState(false);
  //   console.log('============>', displayValue);
  var previous = useSelector(state => state.CalculatorSlice.calculatorData);
  var totalvalue = useSelector(state => state.CalculatorSlice.calculatorData);

  //   console.log('totalValue', totalvalue);
  //   console.log('===========', previous);
  const handleClick = label => {
    if (label == '%') {
      //    console.log('Percentage',previous/100)
      let extra = eval(previous);
      let Percentage = ('Percentage', extra / 100);

      dispatch(CureentDATA(Percentage));
    }
    if (label != '%' && label != 'AC' && label != '=' && label != '+-') {
      dispatch(CalculatorDATA(previous + label));
      var add = previous + label;
      dispatch(CalculatorDATA(add));
    } else if (label == '=') {
      let addraticon = eval(previous);
      console.log('ADDRATION', addraticon);
      dispatch(CureentDATA(addraticon));
      let extraValue = previous + label;
      // console.log('extraValue', extraValue);
    } else if (label == 'AC') {
      dispatch(CureentDATA(''));
    }
  };

  const Item = props => {
    return (
      // <View style={{flexDirection: 'row', backgroundColor: 'red',}}>

      <TouchableOpacity
        onPress={() => {
          handleClick(props.item.label);
        }}
        style={{
          backgroundColor: '#F5F6FA',
          flexDirection: 'row',
          paddingVertical: 13,
          //   paddingHorizontal: 8,
          borderRadius: 10,
          height: '90%',
          margin: 5,
          width: props.item.width,
          justifyContent: 'center',
        }}>
        <Text
          style={{
            marginLeft: 2,
            fontSize: 21,
            color: '#000',
          }}>
          {props.item.label}
        </Text>
      </TouchableOpacity>
      // </View>
    );
  };
  return (
    <View
      style={{
        backgroundColor: Toggel ? '#fdd835' : '#fff',
        justifyContent: 'space-between',
        height: '100%',
      }}>
      <View style={{justifyContent: 'space-between', height: '56%'}}>
        <View style={{left: 20, top: 15}}>
          <ToggelButton setToggelButton={setToggel} ToggelButton={Toggel} />
        </View>
        <Text
          style={{
            color: '#000',

            justifyContent: 'flex-end',
            fontSize: 21,
            alignSelf: 'flex-end',
            margin: 5,
            // right: 20,
          }}>
          {totalvalue}
        </Text>
      </View>
      <View style={{width: '100%'}}>
        <FlatList
          numColumns={'4'}
          data={data}
          renderItem={({item}) => <Item item={item} />}
          keyExtractor={item => item.id.toString()}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

export default Calculator;
