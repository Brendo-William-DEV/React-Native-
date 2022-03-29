import React from 'react';
import {Text, StyleSheet, View} from 'react-native';


import { Avatar } from 'react-native-elements';


export default function Item(props) {



  return (
    
        <View style={styles.item}>

        <Text>{props.item}</Text>


        </View>
    
  );
}

const styles = StyleSheet.create ({

item: {

  padding: 8,
  borderBottomWidth: 1
}



});