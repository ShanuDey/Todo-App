import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Platform } from "react-native";
import Constants from 'expo-constants';
import Footer from "./Footer";
import TodoList from "./TodoList";
import { TodosContext } from "../../contexts/TodosContext"
import AsyncStorage from '@react-native-async-storage/async-storage';

const TODOS_STORAGE_KEY = "@TodoStorageKeyBwPx0r9Ou2";

export default function Todoview() {
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
      const todosArray = jsonValue != null ? JSON.parse(jsonValue) : [];
      setTodos(todosArray);
    } catch (e) {
      // error reading value
      alert("Failed to load Todo");
    }
  };

  const storeData = async (value) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem(TODOS_STORAGE_KEY, jsonValue);
    } catch (e) {
      // saving error
      alert("Failed to store Todo");
    }
  };
  return (
    <View style={styles.container}>
      {/* <Header /> */}
      <TodosContext.Provider value={{ todos, setTodos }}>
        <TodoList />
        <Footer />
      </TodosContext.Provider>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      // marginTop: Constants.statusBarHeight,
      // marginLeft: Platform.OS !== 'web' ? 10 : '10%',
      // marginRight: Platform.OS !== 'web' ? 10 : '10%',
      alignItems: 'stretch',
    },
  });