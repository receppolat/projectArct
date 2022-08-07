import * as React from 'react';
//Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//Pages
import Login from 'pages/Login'
import Home from 'pages/Home'
import Register from 'pages/Register'
import AddProduct from 'pages/AddProduct'
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="AddProduct" component={AddProduct} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;