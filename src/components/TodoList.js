import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function TodoList() {
  return (
    <View style={styles.container}>
      <Text>Todo List</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 6,
    backgroundColor: '#f00',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
