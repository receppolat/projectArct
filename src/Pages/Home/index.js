import { FlatList, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
//Third party
import { SafeAreaView } from 'react-native-safe-area-context'

//Components
import Slider from 'components/Slider'
import Product from 'components/Product'
import Button from 'components/Button'
//Styles
import styles from './style';
export default function Home({navigation}) {

  const [products, setProducts] = useState();

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then(response => {
        setProducts(response.products)
      })
  }, [])

  const renderItem = ({ item }) => {
    return (
      <Product
        data={item}
      />
    )
  }

  return (
    <SafeAreaView>
      <Button
        text={'Ürün ekle'}
        style={styles.button}
        textStyle={styles.textButton}
        onPress={() => { navigation.navigate('AddProduct') }}
      />
      <Slider
        data={products}
        text={'Tüm Ürünler'}
        renderItem={renderItem}
        style={styles.flatlist}
      />
    </SafeAreaView>
  )
}