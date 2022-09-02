import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Body(props) {
  return (
    <View style={styles.container} accessibilityLabel="TodoBodyView">
      <Text>{props.todo.description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
