import { View, Text } from 'react-native'
import React from 'react'

const Dashboard = (props) => {
    const employee=props?.route?.params?.response?.data?.employee

    
  return (
    <View>
     {employee.map((item,index)=>{
      return(<View key={index} style={{flexDirection:'row',margin:4}}>
        <Text >{item.FirstName}</Text>
        <Text style={{left:4}}>{item.LastName}</Text>
        </View>
        )
     })}
    </View>
  )
}

export default Dashboard