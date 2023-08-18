import {View, Text, StyleSheet, Image, TouchableOpacity,ScrollView} from 'react-native';
import React from 'react';
import {ImageAssets} from '../../assets/ImageAssets';
import {FontFamily} from '../../assets/fonts/FontFamily';
import {useNavigation} from '@react-navigation/native';

const CategoryComponent = props => {
  const navigation = useNavigation();

  data = {
    'Body Wash - Men': {
      'Denver Deo Ace 165 ML': {
        PTR:  195,
        mrp: 220,
        PQ:'20 pcs',
        id:0
      },
      'Denver Deo Autograph Collection': {
        PTR:  220,
        mrp: 250,
        PQ:'60 pcs',
        id:1
      },
      'Denver Deo Autograph Collection King': {
        PTR: 250,
        mrp: 300,
        PQ:'160 pcs',
        id:2
      },
    },
    Category2: {
      Product1: {
        PTR:  100,
        mrp: 110,
        PQ:'40 pcs',
        id:3
      },
      Product2: {
        PTR:  120,
        mrp: 150,
        PQ:'50 pcs',
        id:4
      },
      Product3: {
        PTR:  150,
        mrp: 200,
        PQ:'160 pcs',
        id:5
      },
    },
  };
  const handleClick = (category, index, productData) => {
    // console.log(index)
 navigation.navigate('ProductComponent', {
      category,
      index,
      productData,
    });
  };

  return (
    <View>
      {Object.keys(data).map((category, index) => {
        return (
          <ScrollView key={index}>
            <TouchableOpacity
         
              style={{...styles.mainContainer}}
              onPress={() => {
                handleClick(category, index, data[category]);
              }}>
              <Image
                source={ImageAssets.Instagram}
                resizeMode="contain"
                style={{width: 75, height: 100}}
              />
              <View style={{left: 5}}>
                <Text
                  style={{
                    ...styles.categoryText,
                  }}>
                  {category}
                </Text>
              </View>
            </TouchableOpacity>
          </ScrollView>
        );
      })}
    </View>
  );
};

export default CategoryComponent;

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    margin: 10,
    height: 72,
    alignItems: 'center',
    borderRadius: 10,
  },
  categoryText: {
    color: '#000',
    fontSize: 17,
    fontFamily: FontFamily.TTCommonsRegular,
  },
});
