import {View, Text,TouchableOpacity,StyleSheet} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { FontFamily } from '../../assets/fonts/FontFamily';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';



  

const ShowTotal = (props) => {
const navigation=useNavigation()
    const {quantity:quantity1} = useSelector(state => state.SFASlice);
// console.log('quantity1',quantity1)
const totalQuantity = useSelector(state => state.SFASlice.totalQuantity);
// console.log(totalQuantity)
const products = useSelector((state) => state?.SFASlice?.sfaData);
// console.log('(state) => state?.SFASlice?.sfaData',products)
for (let aa of products){
  var ids=(aa.id)
}
const total = products.reduce((sum, product) => sum + product.total, 0);
const quantity = products.reduce((sum, product) => sum + product.quantity, 0);
const ptr = products.reduce((sum, product) => sum + product.ptr, 0);
// console.log('==========ptr=======>',ptr)
// console.log('quantity=========>',quantity)
// console.log('============>',total)

const handleIconPress=()=>{
    // alert ('hiii')
    navigation.navigate('ConfirmOrder',{total,quantity,ptr,quantity1,ids});
  
  
}
  return (
    <View
      style={{
        backgroundColor: 'skyblue',
        height: 90,
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}>
      <View style={{justifyContent: 'center'}}>
        <Text style={{color: '#fff', margin: 7, fontSize: 11, left: 15}}>
        Quantity: {props.Quantity}
        </Text>
        <Text
          style={{
            color: '#fff',
            margin: 5,
            fontSize: 18,
            left: 15,
            bottom: 10,
            fontFamily:FontFamily.TTCommonsDemiBold
          }}>
          Total:₹{props.total}
        </Text>
      </View>
      <TouchableOpacity style={{alignSelf: 'center', margin: 5, right: 15,}}
      onPress={()=>{handleIconPress({total,quantity,ptr,quantity1,ids})}}
      >
        <AntDesign name="arrowright" size={30} color={'#fff'} />
      </TouchableOpacity>
    </View>
  );
};

export default ShowTotal;
ShowTotal.defaultProps={
    total:0,
    Quantity:0

    }

const styles = StyleSheet.create({
    reusableText: {
      // Default text styles can be defined here
    },
  });

