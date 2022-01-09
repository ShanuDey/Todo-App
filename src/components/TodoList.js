import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Todo from './Todo/Todo';

export default function TodoList() {
  const todos = [
    {
      id: 1,
      name: 'Todo 1',
      description:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?',
    },
    {
      id: 2,
      name: 'Todo 2',
      description:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?',
    },
    {
      id: 3,
      name: 'Todo 3',
      description:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?',
    },
    {
      id: 4,
      name: 'Todo 4',
      description:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?',
    },
    {
      id: 5,
      name: 'Todo 5',
      description:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?',
    },
  ];
  return (
    <View style={styles.container}>
      <ScrollView>
        {todos.map((todo) => (
          <Todo todo={todo} />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 6,
    alignItems: 'stretch',
    justifyContent: 'center',
  },
});
