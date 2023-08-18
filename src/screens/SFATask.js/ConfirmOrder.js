import {View, Text, ScrollView, StyleSheet, Image} from 'react-native';
import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import NumericInput from 'react-native-numeric-input';
import {FontFamily} from '../../assets/fonts/FontFamily';
import {ImageAssets} from '../../assets/ImageAssets';
import Header from '../../components/shared/header/Header';
import ShowTotal from './ShowTotal';
import {Quantity, SFAData, SelectedProduct} from '../../helper/utils/redux/slice/SFASlice';
import {Item} from 'react-native-paper/lib/typescript/components/Drawer/Drawer';

const ConfirmOrder = ({route}) => {
  const {quantity1} = route.params;

  const redux_Total = useSelector(state => state.SFASlice.total);



  const PTRTotal = useSelector(state => state.SFASlice.PTR);

  var Total = Object.values(redux_Total).reduce((acc, cur) => {
    return acc + cur;
  }, 0);
  var ptr1 = Object.values(PTRTotal).reduce((acc, cur) => {
    return acc + cur;
  }, 0);

  const {selectedProducts} = useSelector(state => state?.SFASlice);
  

  const [currentQuantity, setCurrentQuantity] = React.useState(quantity);
  const products = useSelector(state => state?.SFASlice?.sfaData);
  // console.log('(state) => state?.SFASlice?.sfaData',products)
  const total = products.reduce((sum, product) => sum + product.total, 0);
  const quantity = products.reduce((sum, product) => sum + product.quantity, 0);
  const ptr = products.reduce((sum, product) => sum + product.ptr, 0);

  const ans2 = Total - ptr1;
  const ans3 = Total - ans2;
  const totalQuantity = useSelector(state => state.SFASlice.totalQuantity);
  const dispatch = useDispatch();
  const handleNumericValue = (value, item, data) => {

    dispatch(SFAData({value: value, id: item, PTR: data.PTR, mrp: data.mrp}));
    // dispatch(Quantity({value: value, id: item}))
    // console.log('============>',value)
    dispatch(
      Quantity({value: value, mrp: data.mrp, id: data.id, PTR: data.PTR}),
    );
  };
  return (
    <View style={{height: '100%'}}>
      <Header text={`Confirm Order`} iconName={'arrow-back'} size={25} />
      <View style={{...styles.mainContainer, justifyContent: 'space-between'}}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={{margin: 5}}>Subtotal</Text>
          <Text style={{margin: 5, color: '#000'}}>₹ {Total}</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            top: -12,
          }}>
          <Text style={{margin: 5}}>PTR maargin</Text>
          <Text style={{margin: 5, color: 'lightgreen'}}>₹{Total - ptr1}</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            top: -7,
          }}>
          <Text style={{margin: 5}}>Total</Text>
          <Text style={{margin: 5, color: '#000'}}>₹ {ans3}</Text>
        </View>
      </View>
      <ScrollView>
        {Object.keys(selectedProducts).map((item, index) => {
          const {PTR, mrp, PQ, product, id} = selectedProducts[item];
          const [perticularPrt, setPerticularPrt] = useState('');
          const [ptr1, setPtr] = useState('');
          const [Quantity, setQuantity] = useState('');
          const {quantity: quantity1} = useSelector(state => state.SFASlice);

          const [selectedQty, setSelectedQty] = useState();

          useEffect(() => {
            Object.keys(quantity1).map(da => {
              if (id == da) {
                setSelectedQty(quantity1[da]);
              }
            });

            {
              Object.keys(redux_Total).map(itm => {
                if (itm == selectedProducts[item].id) {
                  setPerticularPrt(redux_Total[itm]);
                }
              });
            }
            {
              Object.keys(PTRTotal).map(pr => {
                if (pr == selectedProducts[item].id) {
                  setPtr(PTRTotal[pr]);
                }
              });
            }
           
          }, [quantity1, redux_Total, PTR]);
          var obj = {...selectedProducts[item]};
          obj['ptPTR'] = perticularPrt;
          obj['prt'] = ptr1;
          // console.log('OBJ===========>',obj)
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
                      <Text style={{...styles.TextCss}}>
                        PTR Total:₹ {obj.prt}
                      </Text>
                      <Text style={{...styles.TextCss, left: 16}}>
                        Total:₹ {obj.ptPTR}
                      </Text>
                    </View>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        // backgroundColor:'yellowgreen',
                        width: '74%',
                      }}>
                      <Text style={{...styles.QTYCss}}>
                        Packing Quantity: {PQ}
                      </Text>

                      <NumericInput
                        rounded
                        minValue={0}
                        totalWidth={75}
                        totalHeight={30}
                        // value={selectedQty}
                        initValue={selectedQty}
                        textColor="#000"
                        borderColor="lightgrey"
                        onChange={value =>
                          handleNumericValue(
                            value,
                            item,
                            selectedProducts[item],
                          )
                        }
                      />
                    </View>
                  </View>
                </View>
              </View>
            </View>
          );
        })}
      </ScrollView>

      <ShowTotal total={ans3} Quantity={totalQuantity} />
    </View>
  );
};

export default ConfirmOrder;
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
