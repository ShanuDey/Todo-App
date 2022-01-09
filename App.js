import React, { useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import Footer from './src/components/Footer';
import TodoList from './src/components/TodoList';
import Header from './src/components/Header';
import Constants from 'expo-constants';
import { TodosContext } from './src/contexts/TodosContext';
import AsyncStorage from '@react-native-async-storage/async-storage';

const TODOS_STORAGE_KEY = '@TodoStorageKeyBwPx0r9Ou2';

export default function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    storeData(todos);
  }, [todos]);

  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem(TODOS_STORAGE_KEY);
      const todosArray = jsonValue != null ? JSON.parse(jsonValue) : null;
      setTodos(todosArray);
    } catch (e) {
      // error reading value
      alert('Failed to load Todo');
    }
  };

  const storeData = async (value) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem(TODOS_STORAGE_KEY, jsonValue);
    } catch (e) {
      // saving error
      alert('Failed to store Todo');
    }
  };

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
