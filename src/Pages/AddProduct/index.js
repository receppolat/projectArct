import { Alert, Text, View } from 'react-native'
import React, { useState } from 'react'

//Third Party
import { SafeAreaView } from 'react-native-safe-area-context'

//Components
import Input from 'components/Input'
import Button from 'components/Button'
//Styles
import styles from './style'


export default function AddProduct({ navigation }) {

  const [title, setTitle] = useState();
  const [desc, setDesc] = useState();
  const [price, setPrice] = useState();

  const updateProduct = () => {
    if (title && desc && price) {
      fetch('https://dummyjson.com/products/1', {
        method: 'PUT', /* or PATCH */
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: title,
          description: desc,
          price: price,
          brand :'Samsung'
        })
      })
        .then(res => res.json())
        .then(console.log);
    }
    else {
      Alert.alert('Boş alanları doldurunuz')
    }
  }
  const handleAddProduct = () => {
    console.log(title);
    if (title && desc && price) {
      fetch('https://dummyjson.com/products/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: title,
          description: desc,
          price: price
        })
      })
        .then(res => res.json())
        .then(console.log);
    }
    else {
      Alert.alert('Boş alanları doldurunuz')
    }
  }
  return (
    <SafeAreaView style={styles.container}>
      <Input
        style={styles.input}
        setState={setTitle}
        placeHolder={'Ürün Adı'}
        textAlign={'left'}
      />
      <Input
        style={styles.input}
        setState={setDesc}
        placeHolder={'Ürün Açıklaması'}
        textAlign={'left'}
      />
      <Input
        style={styles.input}
        setState={setPrice}
        placeHolder={'Ürün Fiyatı'}
        textAlign={'left'}
      />
      <View>
        <Button
          text={'Ürün Ekle'}
          style={styles.button}
          textStyle={styles.textButton}
          onPress={handleAddProduct}
        />
        <Button
          text={'Güncelle'}
          style={styles.button}
          textStyle={styles.textButton}
          onPress={updateProduct}
        />
      </View>

    </SafeAreaView>
  )
}