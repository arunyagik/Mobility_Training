import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {FontFamily} from '../../assets/fonts/FontFamily';
import {ImageAssets} from '../../assets/ImageAssets';
import Header from '../../components/shared/header/Header';
import NumericInput from 'react-native-numeric-input';
import ShowTotal from './ShowTotal';
import {useDispatch, useSelector} from 'react-redux';
import {
  Quantity,
  SFAData,
  SelectedProduct,
} from '../../helper/utils/redux/slice/SFASlice';
import {current} from '@reduxjs/toolkit';
const ProductComponent = ({route}) => {
  const dispatch = useDispatch();
  const {category, productData, index: ind} = route?.params;

  const totalQuantity = useSelector(state => state.SFASlice.totalQuantity);

  const redux_Total = useSelector(state => state.SFASlice.total);
  // console.log('redux_Total in Product Component>>>>>>>>>>>', PTR);

  var Total = Object.values(redux_Total).reduce((acc, cur) => {
    return acc + cur;
  }, 0);

  
  const products = useSelector(state => state?.SFASlice?.sfaData);
  // console.log('products',products)
  const total = products.reduce((sum, product) => sum + product.total, 0);
  const quantityac = products.reduce(
    (sum, product) => sum + product.quantity,
    0,
  );
  const ptr = products.reduce((sum, product) => sum + product.ptr, 0);
  // console.log('Line No 22 in Product Component ',quantity)

  const [selectedProducts, setSelectedProducts] = React.useState([]);

  // console.log('quantity===',quantity);

  const handleAddToCart = (
    value,
    PTR,
    mrp,
    index,
    id,
    product,
    PQ,
    selectedQty,
    productData,
  ) => {
    // console.log('==VALUE IN  PRODUCT COMOPONENT LINE NO 30=============>',selectedQty)
    dispatch(SFAData({value, index: index, mrp: mrp, id: id, PTR: PTR}));

    dispatch(Quantity({value, index: index, mrp: mrp, id: id, PTR: PTR}));
    dispatch(SelectedProduct({product, PTR, mrp, value, id}));
    //   console.log('==============>',value,PTR,mrp,index)
    // setNumeric(numeric);
    // alert (value)
  };
  const handleAddButton = index => {
    if (selectedProducts.includes(index)) {
      setSelectedProducts(selectedProducts.filter(item => item !== index));
    } else {
      setSelectedProducts([...selectedProducts, index]);
    }
  };

  return (
    <View style={{height: '100%'}}>
      <Header text={`${category}`} iconName={'arrow-back'} size={25} />

      <ScrollView>
        {Object.keys(productData).map((product, index) => {
          const {PTR, mrp, PQ, id} = productData[product];
          // console.log(productData[product])
          const {quantity: quantity1} = useSelector(state => state.SFASlice);

          const [selectedQty, setSelectedQty] = useState(0);
          useEffect(() => {
            Object.keys(quantity1).map(da => {
              if (id == da) {
                setSelectedQty(quantity1[da]);
              }
            });
          }, [quantity1]);
          // productData[product]['qty'] = quantity1[da];
          // console.log(selectedQty);
          return (
            <View key={index}>
              <View style={{...styles.mainContainer}}>
                <View style={{flexDirection: 'row'}}>
                  <Image
                    source={ImageAssets.denver}
                    resizeMode="contain"
                    style={{width: 75, height: 70}}
                  />
                  <View>
                    <Text style={{...styles.productTextCss}}>{product}</Text>

                    <View style={{...styles.PTR_mrp_View}}>
                      <Text style={{...styles.TextCss}}>PTR:₹ {PTR}</Text>

                      <Text style={{...styles.TextCss, left: 16}}>
                        MRP:₹ {mrp}
                      </Text>
                    </View>
                    {/* <Text>{aa}</Text> */}
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        // backgroundColor:'yellowgreen',
                        width: '76%',
                      }}>
                      <Text style={{...styles.QTYCss}}>
                        Packing Quantity: {PQ}
                      </Text>
                      {selectedProducts.includes(index) ? (
                        <>
                          <NumericInput
                            rounded
                            minValue={0}
                            totalWidth={75}
                            totalHeight={30}
                            initValue={selectedQty}
                            // value={selectedQty}
                            textColor="#000"
                            borderColor="lightgrey"
                            onChange={value =>
                              handleAddToCart(
                                value,
                                PTR,
                                mrp,
                                index,
                                id,
                                product,
                                PQ,
                                selectedQty,
                                productData[product],
                              )
                            }
                          />
                        </>
                      ) : (
                        <TouchableOpacity
                          onPress={() => {
                            handleAddButton(index);
                          }}
                          style={{
                            borderWidth: 1,
                            width: 70,
                            borderRadius: 5,
                            height: 27,
                            alignItems: 'center',
                            borderColor: 'lightgrey',
                          }}>
                          <Text style={{color: 'skyblue'}}>Add +</Text>
                        </TouchableOpacity>
                      )}
                    </View>
                  </View>
                </View>
              </View>
            </View>
          );
        })}
      </ScrollView>
      {selectedProducts.length > 0 ? (
        <ShowTotal total={Total} Quantity={totalQuantity} />
      ) : null}
    </View>
  );
};

export default ProductComponent;

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#fff',
    margin: 10,
    height: 100,
    borderRadius: 10,
    // flexDirection:'row'
    // justifyContent:'center',
  },
  productTextCss: {
    color: '#000',
    fontFamily: FontFamily.TTCommonsRegular,
    fontSize: 16,
    margin: 5,
  },
  PTR_mrp_View: {
    flexDirection: 'row',
    // margin: 2,
    // justifyContent: 'center',
    // bottom: 50,
    // right: 35,
  },
  TextCss: {
    // margin: 5,
    left: 5,
    fontFamily: FontFamily.TTCommonsMedium,
    color: '#000',
    fontSize: 13,
    // padding:2
  },
  QTYCss: {
    left: 5,
    fontFamily: FontFamily.TTCommonsExtraLight,
    color: '#000',
    fontSize: 12,
  },
});
