import React, { useContext, useState } from 'react';
import { View, StyleSheet, TextInput, Button } from 'react-native';
import { TodosContext } from '../../contexts/TodosContext';
import { v4 as uuidv4 } from 'uuid';

export default function Footer() {
  const { todos, setTodos } = useContext(TodosContext);
  const [newTodo, setNewTodo] = useState('');

  function addTodoHandler() {
    if (newTodo !== '') {
      let currentName =
        newTodo.length <= 10 ? newTodo : `${newTodo.substring(0, 10)}...`;
      setTodos([
        {
          key: uuidv4(),
          name: currentName,
          description: newTodo,
        },
        ...todos,
      ]);
      setNewTodo('');
    }
  }

  return (
    <View style={styles.container}>
      <TextInput
        placeholder='Type your Todo here'
        style={styles.input}
        value={newTodo}
        accessibilityLabel="AddTodoTextInput"
        onChangeText={(text) => setNewTodo(text)}
      />
      <Button title='Add' style={styles.button} onPress={addTodoHandler} accessibilityLabel="TodoFooterAddButton"/>
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
