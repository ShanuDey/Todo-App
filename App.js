import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Footer from './src/components/Footer';
import TodoList from './src/components/TodoList';
import Header from './src/components/Header';
import Constants from 'expo-constants';
import { TodosContext } from './src/contexts/TodosContext';

export default function App() {
  const [todos, setTodos] = useState([
    {
      key: 1,
      name: 'Todo 1',
      description:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?',
    },
    {
      key: 2,
      name: 'Todo 2',
      description:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?',
    },
    {
      key: 3,
      name: 'Todo 3',
      description:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?',
    },
    {
      key: 4,
      name: 'Todo 4',
      description:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?',
    },
    {
      key: 5,
      name: 'Todo 5',
      description:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?',
    },
  ]);

  return (
    <View style={styles.container}>
      <Header />
      <TodosContext.Provider value={{ todos, setTodos }}>
        <TodoList />
        <Footer />
      </TodosContext.Provider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: Constants.statusBarHeight,
    alignItems: 'stretch',
  },
});
