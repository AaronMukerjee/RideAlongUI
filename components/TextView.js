import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

const textbox = () => {
   return (
      <TextInput styles={styles.input} />
   )
}

const styles = StyleSheet.create({
    input: {
       margin: 15,
       height: 40,
       borderColor: '#ffffff',
       borderWidth: 1
    }
})
export default textbox