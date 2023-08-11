import {StyleSheet, Text, View, StatusBar, ScrollView} from 'react-native';
import React, {useState} from 'react';
import FullSizeButton from '../../components/shared/buttons/FullSizeButton';
import Header from '../../components/shared/header/Header';
import RadioButton from '../../components/shared/buttons/radioButton/RadioButton';
import {FontFamily} from '../../assets/fonts/FontFamily';
import {ThirdDATA, ThirdScore} from '../../helper/utils/redux/slice/ThirdData';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import _ from 'lodash';
const ThirdQuesAnswerPage = props => {
  var obj = {
    'Que 3.Rate your difficulty when perorming following actions.': {
      'Q1.Descending stars ': [
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
      'Q2.Accending stars': [
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
      'Q3.Rising from sitring': [
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
      'Q4.Standing': [
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
      'Q5.Bending to floor': [
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
      'Q6.Walking on Even floor': [
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
      'Q7.Getting in Out of car': [
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
      'Q8.Going Shoping': [
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
      'Q9.Puttiong on socks': [
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
      'Q10.Rising from bed': [
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
      'Q11.Talking off socks': [
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
      'Q12.Lying in bed': [
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
      'Q13.Geting on out of bed': [
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
      'Q14.Seting': [
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
      'Q15.Talking off socks': [
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
      'Q16.Walking on Even floor': [
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
      'Q17.Standing': [
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
  const navigation = useNavigation();

  const dispatch = useDispatch();

  var ThirdTotal = useSelector(state => state.ThirdData.total);

  const myFun = (id, value) => {
    const data = {index: id, value: value};
    dispatch(ThirdDATA(data));
    dispatch(ThirdScore());
  };

  const debouncedFunction = _.debounce(() => {
    navigation.goBack();
    console.log('Debounced function executed!');
  },500);
  const handleButtonPress = () => {
  
    debouncedFunction();
  };
  return (
    <>
      <StatusBar hidden={false} translucent backgroundColor="transparent" />
      <View>
        <Header
          text={'Womac Osteoartiritis Index 3/4'}
          iconName={'keyboard-arrow-left'}
          size={30}
        />
      </View>
      <View>
        {Object.keys(obj).map((Ques, i) => {
          return (
            <View key={i}>
              <Text
                style={{
                  margin: 5,
                  padding: 5,
                  // left: 4,
                  color: '#000',
                  fontFamily: FontFamily.Popinssemibold,
                  fontSize: 17,
                }}>
                {Ques}
              </Text>
            </View>
          );
        })}
      </View>

      <ScrollView>
        <View style={{backgroundColor: '#ecf9fb'}}>
          <View style={{margin: 1, padding: 1}}>
            {Object.values(obj).map((label, index) => {
              const label_key = label;
              return (
                <View key={index}>
                  {Object.keys(label_key).map((val, index) => {
                    const [ThirdData, setThirdData] = useState();
                    var Third_Page_DATA_Redux = useSelector(
                      state => state.ThirdData.ThirdData,
                    );

                    // console.log('firstDataRedux', firstDataRedux);

                    React.useEffect(() => {
                      Third_Page_DATA_Redux?.map(dat => {
                        // console.log('===============111', dat);
                        // console.log('===============111>>', index);
                        if (index === dat.index) {
                          //  console.log('dat.value>>',dat.value);
                          setThirdData(dat.value);
                          //  console.log('==========hjjj=====', firstData);
                        }
                      });
                    }, [Third_Page_DATA_Redux]);

                    const scores = label_key[val];
                    for (let inde of scores) {
                      inde['index'] = index;
                    }
                    return (
                      <ScrollView key={index}>
                        <Text>{val}</Text>

                        <RadioButton
                          scores={scores}
                          myFun={myFun}
                          SecondData={ThirdData}
                        />
                      </ScrollView>
                    );
                  })}
                </View>
              );
            })}
          </View>
          <RadioButton />
        </View>
      </ScrollView>
      <View style={{}}>
        <Text
          style={{padding: 5, margin: 5}}>{`Score:${ThirdTotal}/${64}`}</Text>

        <View
          style={{
            width: '90%',
            alignSelf: 'center',

            justifyContent: 'space-between',
          }}>
          <View style={{flexDirection: 'row', alignSelf: 'center'}}>
            <View style={{width: '50%', padding: 4, margin: 5}}>
              <FullSizeButton
                text={'Previous'}
                icon={'arrow-left-l'}
                size={14}
                onPress={() => {
                  // navigation.goBack();
                  handleButtonPress();
                }}
              />
            </View>
            <View style={{width: '50%', padding: 4, margin: 5}}>
              <FullSizeButton
                text={'Next'}
                iconName={'arrow-right-l'}
                size={14}
                onPress={() => {
                  props.navigation.navigate('Test');
                }}
              />
            </View>
          </View>
        </View>
      </View>
    </>
  );
};

export default ThirdQuesAnswerPage;

const styles = StyleSheet.create({});
