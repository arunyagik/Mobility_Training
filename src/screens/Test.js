import {View, Text} from 'react-native';
import React from 'react';
import Header from '../components/shared/header/Header';
import {useDispatch, useSelector} from 'react-redux';

const Test = () => {
  var firstTotal = useSelector(state => state.FirstData.total);
  var Total = useSelector(state => state.SecondData.total);

  var Third_Page_DATA_ReduxTotal = useSelector(state => state.ThirdData.total);
  

  return (
    <View>
      <Header
        text={'Womac Osteoartiritis Index 3/4'}
        iconName={'keyboard-arrow-left'}
        size={30}
      />

      <Text style={{margin: 5, padding: 5, alignSelf: 'center', color: '#000'}}>
        {`FirsDataScore:${firstTotal}`}
      </Text>
      <Text style={{margin: 5, padding: 5, alignSelf: 'center', color: '#000'}}>
        {`SecondDataScore:${Total}`}
      </Text>
      <Text style={{margin: 5, padding: 5, alignSelf: 'center', color: '#000'}}>
        {`ThirdDataScore:${Third_Page_DATA_ReduxTotal}`}
      </Text>
      <Text style={{margin: 5, padding: 5, alignSelf: 'center', color: '#000'}}>
        {`Total:${firstTotal + Total + Third_Page_DATA_ReduxTotal}`}
      </Text>
    </View>
  );
};

export default Test;
