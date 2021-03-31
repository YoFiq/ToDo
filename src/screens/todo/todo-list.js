import React, { useEffect, useState } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { TodoInput } from './todo-input';
import { TodoItem } from './todo-item';
import { getAllTodos } from '../../api/get-all-todos';
import { syncTodos } from '../../api/sync-todos';

export const TodoList = () => {
  const [todos, setTodos] = useState([]);

  const formatGraphQlData = (data) => JSON.stringify(data).replace(/"([^(")"]+)":/g, '$1:');

  const synchroniseTodos = () => {
    const reformattedTodos = formatGraphQlData(todos);
    syncTodos(reformattedTodos).then((res) => console.log(res.data.data));
  };

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
