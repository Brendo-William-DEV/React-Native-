import React, { useState } from 'react';

import { Alert, useColorScheme, Button, Text, TextInput, View, StyleSheet, Image, TouchableOpacity,
Switch } from 'react-native';


export default function LoginScreen({ navigation }) {
  


  const darkMode = false;
  const [email, setEmail] = useState();
  const [senha, setSenha] = useState();
  const [pressionou, setPressionou] = useState(false);

  const darkContainer = pressionou
    ? { backgroundColor: 'blue' }
    : { backgroundColor: 'white' };

  const pressionaBotao = () => {
     navigation.navigate("lista");
  };

  const atribuiEmail = (value) => {
    setEmail(value);
  }

  const atribuiSenha = (value) => {
    setSenha(value);
  }

  const mudaValor = () => {
    setPressionou(previousState => !previousState);
  }

  return (

    <View style={[styles.container, darkContainer]}>
      <View style={{ alignItems: 'center' }}>
        <TouchableOpacity

          onLongPress={pressionaBotao}>
          <Image
            style={{ width: 100, height: 100 }}
            source={require('../assets/istockphoto-1125251083-1024x1024.jpg')}
          />
        </TouchableOpacity>
      </View>
      <Text>E-mail</Text>
      <TextInput
        style={styles.field}
        keyboardType="email-address"
        autoCapitalize="none"
        value={email}
        onChangeText={atribuiEmail}
      />
      <Text>Senha</Text>
      <TextInput
        style={styles.field}
        keyboardType="number-pad"
        secureTextEntry={true}
        value={senha}
        onChangeText={(value) => setSenha(value)}
      />
      <Button 
      title="Entrar" 
      color="red" 
      onPress={pressionaBotao} />
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-stretch',
    padding: 10,
  },

  field: {
    borderBottomWidth: 1,
    borderBottomColor: 'blue',
    padding: 10,
    marginBottom: 12,
  },
});