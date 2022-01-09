import React from 'react';
import { View, StyleSheet, TextInput, Button } from 'react-native';

export default function Footer() {
  return (
    <View style={styles.container}>
      <TextInput placeholder='Type your Todo here' style={styles.input} />
      <Button title='Add' style={styles.button} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    margin: 10,
  },
  input: {
    flex: 2,
    margin: 5,
    borderWidth: 1,
    padding: 2,
    borderColor: '#1b6110',
  },
  button: {
    flex: 1,
  },
});
