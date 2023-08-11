import {View, Text} from 'react-native';
import React from 'react';
import {Checkbox} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';
import {
  CheckBOX,
  selectAll,
} from '../../helper/utils/redux/slice/CheckBoxSlice';
import FullSizeButton from '../../components/shared/buttons/FullSizeButton';

const CheckBox = props => {
  const dispatch = useDispatch();

  const [checked, setChecked] = React.useState(false);

  const handleSelectValue = item => {
    setChecked(false);
    dispatch(CheckBOX(item));
  };
  var Total = useSelector(state => state.CheckBox.checkBox);
 

  const options = [
    {id: 1, label: 'Item1'},
    {id: 2, label: 'Item2'},
    {id: 3, label: 'Item3'},
    {id: 4, label: 'Item4'},
  ];
  handleSelectAll = options => {
  
    dispatch(selectAll(checked == false ? options : []));
  };
  return (
    <View>
      <View style={{flexDirection: 'row'}}>
        <Checkbox.Android
          color="#34acd3"
          status={checked ? 'checked' : 'unchecked'}
          onPress={() => {
            handleSelectAll(options);
            setChecked(!checked);
          }}
        />
        <Text style={{alignSelf: 'center'}}>Select All</Text>
      </View>
      {options?.map((item, index) => {
        const checkedID = Total.find(itm => {
          return itm.id === item.id;
        });

        return (
          <>
            <View key={index} style={{}}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Checkbox.Android
                  color="#34acd3"
                  status={checkedID ? 'checked' : 'unchecked'}
                  onPress={() => handleSelectValue(item)}
                />
                <Text style={{color: '#000'}}>{item.label}</Text>
              </View>
            </View>
          </>
        );
      })}
      {Total.length > 0 && (
        <FullSizeButton
          onPress={() => {
            props.navigation.navigate('Result');
          }}
          text={'Next'}
          iconName={'arrow-right-l'}
          size={14}
        />
      )}
    </View>
  );
};

export default CheckBox;
