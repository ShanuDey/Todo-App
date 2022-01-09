import React, { useContext } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { TodosContext } from '../../contexts/TodosContext';

export default function Header(props) {
  const { todos, setTodos } = useContext(TodosContext);

  function handleDeleteTodo() {
    setTodos(todos.filter((currTodo) => currTodo.key !== props.todo.key));
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{props.todo.name}</Text>
      <Button style={styles.button} title='x' onPress={handleDeleteTodo} />
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
