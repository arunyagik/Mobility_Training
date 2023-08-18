import { View, Text,ScrollView } from 'react-native'
import React from 'react'
import Header from '../../components/shared/header/Header'
import CategoryComponent from './CategoryComponent'
const ProductCategory = (props) => {
  return (
    <ScrollView>
<Header 
text={'Product Category'}
iconName={'arrow-back'}
size={25}
/>
<View>
    <CategoryComponent/>
</View>

    </ScrollView>
  )
}

export default ProductCategory