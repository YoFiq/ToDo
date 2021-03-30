import React, { useState } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { TodoInput } from './todo-input';
import { TodoItem } from './todo-item';

const mockedTodos = () => [
  {
    id: '1',
    title: 'First test todo',
    completed: true,
  },
  {
    id: '2',
    title: 'Second test todo',
    completed: false,
  },
  {
    id: '3',
    title: 'Third test todo',
    completed: false,
  },
  {
    id: '4',
    title:
      'Fourth test todotodotodotodotodotodotodotodotodotodotodotodotodotodotodotodotodotodotodotodotodotodotodotodotodotodotodotodotodotodotodotodotodotodotodotodotodotodotodotodotodotodotodotodotodotodotodotodotodotodotodotodotodotodotodotodotodotodotodotodotodotodotodotodotodotodotodotodotodotodotodotodotodotodotodotodotodotodotodotodotodotodotodotodotodotodotodotodotodotodotodotodotodotodotodotodotodotodotodotodotodotodotodotodotodotodotodotodotodotodotodotodotodotodotodotodotodotodotodotodotodotodotodotodotodotodotodotodotodotodotodotodotodotodotodotodotodotodotodotodotodotodotodotodotodotodotodotodotodotodotodotodotodotodotodotodotodotodotodotodotodotodotodotodotodotodotodotodo',
    completed: true,
  },
];

export const TodoList = () => {
  const [todos, setTodos] = useState(mockedTodos);
  return (
    <View style={styles.screen}>
      <TodoInput />
      <FlatList
        data={todos}
        renderItem={({ item }) => <TodoItem todo={item} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
});
