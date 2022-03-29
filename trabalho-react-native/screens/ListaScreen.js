import React from 'react';
import { FlatList, Text, StyleSheet, View } from 'react-native';
import { FAB, Icon } from 'react-native-elements';

import Item from '../components/Itens';

export default function ListaScreen({ navigation }) {
  const dados = [

       'Macarrão',
       'Pizza',
       'Lazanha',
       'Lazanha de berinjela',

    
  ];
  const pressionaFAB = () => {
    navigation.navigate('cadastro');
  };


  return (
    <View style={{ flex: 1 }}>
      <View style={styles.bar}>
        <Text style={styles.titulo}>Receitas</Text>
      </View>
      <View style={styles.lista}>
        <FlatList
          data={dados}
          renderItem={Item}
          keyExtractor={item => item.id}
        />
      </View>
      <FAB
        placement="right"
        color="red"
        icon={<Icon name="add" color="yellow" />}
        onPress={pressionaFAB}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  bar: {
    flex: 1,
    paddingLeft: 10,
    justifyContent: 'center',
    backgroundColor: 'red',
  },
  titulo: {
    color: 'yellow',
    fontWeight: 'bold',
  },
  lista: {
    flex: 8,
  },
});