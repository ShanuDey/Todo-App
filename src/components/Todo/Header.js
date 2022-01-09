import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function Header(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{props.todo.name}</Text>
      <Button style={styles.button} title='x' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    flex: 1,
  },
});
