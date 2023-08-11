import {StyleSheet, Text, View, StatusBar, ScrollView} from 'react-native';
import React, {useState} from 'react';
import FullSizeButton from '../../components/shared/buttons/FullSizeButton';
import Header from '../../components/shared/header/Header';
import RadioButton from '../../components/shared/buttons/radioButton/RadioButton';
import {FontFamily} from '../../assets/fonts/FontFamily';
import {useDispatch, useSelector} from 'react-redux';
import {SecondDATA} from '../../helper/utils/redux/slice/SecondData';
import { TotalScore } from '../../helper/utils/redux/slice/SecondData';
import {
  useNavigation,
 
} from '@react-navigation/native';
const SecondQuesAnswerPage = props => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  var Total = useSelector(state => state.SecondData.total);
  // console.log('=====SECONDQUESANSWERPAGE 13===>', Total);

  var obj = {
    ' Q1. Rate your pain by performing below activities': {
      '01 Walking': [
        {
          text: 'None',
          score: 0,
        },
        {
          text: 'Mild',
          score: 1,
        },
        {
          text: 'serve',
          score: 2,
        },
        {
          text: 'Extere',
          score: 3,
        },
        {
          text: 'Super',
          score: 4,
        },
      ],
      '02 Evening': [
        {
          text: 'None',
          score: 0,
        },
        {
          text: 'Mild',
          score: 1,
        },
        {
          text: 'serve',
          score: 2,
        },
        {
          text: 'Extere',
          score: 3,
        },
        {
          text: 'Super',
          score: 4,
        },
      ],
    },
  };

  const myFun = (id, value) => {

    const data = {index: id, value: value};
    dispatch(SecondDATA(data));
    
    dispatch(TotalScore())
  };

  return (
    <>
      <StatusBar hidden={false} translucent backgroundColor="transparent" />

      <View>
        <Header
          text={'Womac Osteoartiritis Index 2/4'}
          iconName={'keyboard-arrow-left'}
          size={30}
        />
      </View>
     
      <View>
        {Object.keys(obj).map((item,inn) => {
          return (
            <View style={{backgroundColor: '#ecf9fb'}} key={inn}>
              <View style={{margin: 5, padding: 5}}>
                <Text
                  style={{
                    margin: 5,
                    padding: 5,
                    left: 4,
                    color: '#000',
                    fontFamily: FontFamily.Popinssemibold,
                    fontSize: 17,
                    
                  }}>
                  {item}
                </Text>
              </View>
              {Object.values(obj).map((val,i) => {
                let value = val;
                return (
                  <View key={i}>
                    {Object.keys(value).map((v, index) => {
                      const [SecondData, setSecondData] = useState();
                      var Selected_Value = useSelector(
                        state => state.SecondData.SecondData,
                      );
                      // console.log('Selected_Value',Selected_Value);
                      React.useEffect(() => {
                        Selected_Value?.map(dat => {
                          // console.log('===============111', dat.index);
                          // console.log('===============111>>', index);
                          if (index === dat.index) {
                              // console.log('dat.value>>',dat.value);
                            setSecondData(dat.value);
                            // console.log('==========hjjj=====', SecondData);
                          }
                        });
                      }, [Selected_Value]);
                      const scores = value[v];
                      
                      for (let inde of scores) {
                        inde['index'] = index;
                        
                      }

                      // console.log('==>>>>>>>>>>>><<<<F<<<<<<<=', scores);

                      return (
                        <View key={index}>
                          <Text>{v}</Text>
                          <RadioButton
                            scores={scores}
                            myFun={myFun}
                            value={value}
                            SecondData={SecondData}
                          />
                        </View>
                      );
                    })}
                  </View>
                );
              })}
            </View>
          );
        })}
      </View>
      <View style={{}}>
        <Text style={{padding: 5, margin: 5}}>{`Score:${Total}/${
          16
        }`}</Text>

        <View
          style={{
            width: '90%',
            alignSelf: 'center',
            height: '64%',
            justifyContent: 'space-between',
          }}>
          <View style={{}}>
            <Text></Text>
          </View>
          <View style={{flexDirection: 'row', alignSelf: 'center'}}>
            <View style={{width: '50%', padding: 4, margin: 5}}>
              <FullSizeButton
                text={'Previous'}
                icon={'arrow-left-l'}
                size={14}
                onPress={() => {
                  navigation.goBack();
                }}
              />
            </View>
            <View style={{width: '50%', padding: 4, margin: 5}}>
              <FullSizeButton
                text={'Next'}
                iconName={'arrow-right-l'}
                size={14}
                onPress={() => {
                  props.navigation.navigate('ThirdQuesAnswerPage');
                }}
              />
            </View>
          </View>
        </View>
      </View>
    </>
  );
};

export default SecondQuesAnswerPage;

const styles = StyleSheet.create({});
