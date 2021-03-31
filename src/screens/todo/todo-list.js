import React, { useEffect, useState } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { useIsConnected } from 'react-native-offline';
import { Button } from 'react-native-elements';
import { TodoInput } from './todo-input';
import { TodoItem } from './todo-item';
import { getAllTodos } from '../../api/get-all-todos';
import { syncTodos } from '../../api/sync-todos';
import { NetworkDetector } from '../../services/network-detector';
import { formatGraphQlData } from '../../shared/utils';
import { getTodosFromAsyncStorage, setTodosToAsyncStorage } from '../../services/async-storage';

export const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const isConnected = useIsConnected();

  const synchroniseTodos = () => {
    const reformattedTodos = formatGraphQlData(todos);
    syncTodos(reformattedTodos).then((res) => console.log(res.data.data));
  };

  useEffect(() => {
    if (isConnected) {
      getAllTodos().then((res) => {
        setTodos(res.data.data.getAllTodos);
        setTodosToAsyncStorage(res.data.data.getAllTodos);
      });
    } else {
      getTodosFromAsyncStorage().then((res) => setTodos(res));
    }
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
      <Button
        title="async"
        onPress={() => {
          getTodosFromAsyncStorage().then((res) => console.log(res));
        }}
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
