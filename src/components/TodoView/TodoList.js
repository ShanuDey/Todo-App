import React, { useContext } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { TodosContext } from '../../contexts/TodosContext';
import Todo from '../Todo/Todo';

export default function TodoList() {
  const { todos, setTodos } = useContext(TodosContext);

  return (
    <View style={styles.container} accessibilityLabel="TodoListContainer">
      <ScrollView>
        {todos.map((todo) => (
          <Todo todo={todo} key={todo.key.toString()} />
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
