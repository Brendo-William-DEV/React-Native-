import React from 'react';
import  LoginScreen  from './screens/LoginScreen';
import ListaScreen from './screens/ListaScreen';
import CadastroScreen from './screens/CadastroScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import 'react-native-gesture-handler';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="login">
        <Stack.Screen name="login" component={LoginScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="lista" component={ListaScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="cadastro" component={CadastroScreen} options={{headerShown: true , headerStyle: { backgroundColor: 'yellow' }, headerTitleStyle: { color: 'black'},}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}