import React, { useEffect, useState } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { useIsConnected } from 'react-native-offline';
import { TodoInput } from './todo-input';
import { TodoItem } from './todo-item';
import { getAllTodos } from '../../api/get-all-todos';
import { syncTodos } from '../../api/sync-todos';
import { NetworkDetector } from '../../services/network-detector';

export const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const isConnected = useIsConnected();

  const formatGraphQlData = (data) => JSON.stringify(data).replace(/"([^(")"]+)":/g, '$1:');

  const synchroniseTodos = () => {
    console.log('runned');
    const reformattedTodos = formatGraphQlData(todos);
    syncTodos(reformattedTodos).then((res) => console.log(res.data.data));
  };

  useEffect(() => {
    getAllTodos().then((res) => {
      setTodos(res.data.data.getAllTodos);
    });
  }, []);

  useEffect(() => {
    if (todos.length !== 0 && isConnected) {
      synchroniseTodos();
    }
  }, [isConnected]);

  return (
    <View style={styles.screen}>
      <NetworkDetector />
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
