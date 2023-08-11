import {StyleSheet, Text, View, StatusBar, ScrollView} from 'react-native';
import React, {useState} from 'react';
import FullSizeButton from '../../components/shared/buttons/FullSizeButton';
import Header from '../../components/shared/header/Header';
import RadioButton from '../../components/shared/buttons/radioButton/RadioButton';
import {FontFamily} from '../../assets/fonts/FontFamily';
import {useDispatch, useSelector} from 'react-redux';
import {FirstDATA, FirstScore} from '../../helper/utils/redux/slice/FirstData';


const FirstQuesAnswerPage = props => {
  const dispatch = useDispatch();

  var obj = {
    ' Q1. Rate Your Pain by performing below activities': {
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
      'Q2.Climbing stairs': [
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
      'Q3.Sleeping at night': [
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
    },
  };
  var firstTotal = useSelector(
    state => state.FirstData.total,
  );
 
  const myFun = (id, value) => {
    const data = {index: id, value: value};
    
    dispatch(FirstDATA(data));
    dispatch(FirstScore())
  };

  return (
    <ScrollView>
      <StatusBar hidden={false} translucent backgroundColor="transparent" />

      <View>
        <Header
          text={'Womac Osteoartiritis Index'}
          iconName={'keyboard-arrow-left'}
          size={30}
        />
      </View>
      {Object.keys(obj).map((Ques,i) => {
        const values = obj[Ques];

        return (
          <View key={i}>
            <Text
              style={{
                margin: 5,
                padding: 5,
                left: 4,
                color: '#000',
                fontFamily: FontFamily.Popinssemibold,
                fontSize: 17,
              }}>
              {Ques}
            </Text>
            <View style={{backgroundColor: '#ecf9fb'}}>
              <View style={{margin: 1, padding: 1}}>
                <Text style={{top: 12}}>
                  {Object.values(obj).map((valu, index) => {
                    const value = valu;
                    return (
                      <View key={index}>
                        {Object.keys(value).map((ke, index) => {
                          const [firstData, setFirstData] = useState();
                          var firstDataRedux = useSelector(
                            state => state.FirstData.firstData,
                          );
                          // console.log('firstDataRedux', firstDataRedux);

                          React.useEffect(() => {
                            firstDataRedux?.map(dat => {
                              // console.log('===============111', dat);
                              // console.log('===============111>>', index);
                              if (index === dat.index) {
                                //  console.log('dat.value>>',dat.value);
                                setFirstData(dat.value);
                                //  console.log('==========hjjj=====', firstData);
                              }
                            });
                          }, [firstDataRedux]);

                          const scores = value[ke];
                          for (let inde of scores) {
                            inde['index'] = index;
                           
                          }
                          return (
                            <View key={index}>
                              <Text>{ke}</Text>
                              <RadioButton
                                scores={scores}
                                myFun={myFun}
                                SecondData={firstData}
                             
                              />
                            </View>
                          );
                        })}
                      </View>
                    );
                  })}
                </Text>
              </View>
              {/* <RadioButton /> */}
            </View>
          </View>
        );
      })}

      <View></View>
      <View style={{}}>
        <Text style={{padding: 5, margin: 5}}>{`Score:${firstTotal}/${18}`}</Text>

        <View
          style={{
            width: '90%',
            alignSelf: 'center',
          }}>
          <View style={{}}>
            <Text></Text>
          </View>
          <View style={{}}>
            <FullSizeButton
              onPress={() => {
                props.navigation.navigate('SecondQuesAnswerPage');
              }}
              text={'Next'}
              iconName={'arrow-right-l'}
              size={14}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default FirstQuesAnswerPage;

const styles = StyleSheet.create({});
