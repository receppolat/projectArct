import { Text, View } from 'react-native'
import React, { useState } from 'react'

//Third Party
import { SafeAreaView } from 'react-native-safe-area-context'

//Components
import Input from 'components/Input'
import Button from 'components/Button'
//Styles
import styles from './style'


export default function Login({navigation}) {

  const [username, setUsername] = useState();
  const [pass, setPass] = useState();
  return (
    <SafeAreaView style={styles.container}>
      <Input
        style={styles.input}
        onChangeText={setUsername}
        placeHolder={'Kullanıcı Adı'}
        textAlign={'left'}
      />
      <Input
        style={styles.input}
        onChangeText={setPass}
        placeHolder={'Parola'}
        textAlign={'left'}
      />
      <View>
        <Button
          text={'Giriş Yap'}
          style={styles.button}
          textStyle={styles.textButton}
          onPress={() => {navigation.navigate('Home')}}
        />
      </View>

    </SafeAreaView>
  )
}