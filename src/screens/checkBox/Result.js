import { View, Text } from 'react-native'
import React from 'react'
import {useSelector} from 'react-redux';
const Result = (props) => {
   
    var seleAll = useSelector(state => state.CheckBox.checkBox);
  
  return (
    <View>
    {seleAll.map((item)=>{
        return (
            <View>
             <Text style={{margin:5,alignSelf:'center'}}>
             {item.label}
                </Text>  
                </View>
        )
    })}
    </View>
  )
}

export default Result