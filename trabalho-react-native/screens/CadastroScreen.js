import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function CadastroScreen({ navigation }) {
  const [nome, setNome] = useState();
  const [telefone, setTelefone] = useState();

  const pressionaBotao = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text>Nome da receita</Text>
      <TextInput
        style={styles.field}
        value={nome}
        onChangeText={(text) => setNome(text)}
      />
      <Text>Descrição</Text>
      <TextInput
        style={styles.field}
        keyboardType="number-pad"
        value={telefone}
        onChangeText={(text) => setTelefone(text)}
      />
      <Button title="Salvar" color="red" onPress={pressionaBotao} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    padding: 8,
  },
  field: {
    borderBottomWidth: 1,
    borderBottomColor: '#bbb',
    padding: 4,
    marginBottom: 16,
  },
});
