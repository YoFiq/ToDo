import React, { useEffect, useState } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { TodoInput } from './todo-input';
import { TodoItem } from './todo-item';
import { getAllTodos } from '../../api/get-all-todos';

export const TodoList = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    getAllTodos().then((res) => {
      setTodos(res.data.data.getAllTodos);
    });
  }, []);

  return (
    <View style={styles.screen}>
      <TodoInput setTodos={setTodos} />
      <FlatList
        data={todos}
        renderItem={({ item }) => <TodoItem setTodos={setTodos} todo={item} />}
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
