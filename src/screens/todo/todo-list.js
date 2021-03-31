import React, { useEffect, useRef, useState } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { useIsConnected } from 'react-native-offline';
import 'react-native-get-random-values';
import { nanoid } from 'nanoid';
import { TodoInput } from './todo-input';
import { TodoItem } from './todo-item';
import { getAllTodos } from '../../api/get-all-todos';
import { syncTodos } from '../../api/sync-todos';
import { NetworkDetector } from '../../services/network-detector';
import { formatGraphQlData, jsonCopy } from '../../shared/utils';
import { getTodosFromAsyncStorage, setTodosToAsyncStorage } from '../../services/async-storage';
import { addTodo } from '../../api/add-todo';
import { deleteTodo } from '../../api/delete-todo';
import { updateTodo } from '../../api/update-todo';

export const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const isConnected = useIsConnected();
  const isMounted = useRef(false);

  const setNewTodo = (todo) =>
    setTodos((prevState) => {
      const newState = jsonCopy(prevState);
      newState.push(todo);
      setTodosToAsyncStorage(newState);
      return newState;
    });

  const addTodoItem = (title) => {
    if (isConnected) {
      addTodo(title).then((res) => setNewTodo(res.data.data.addTodo));
    } else {
      setNewTodo({ id: nanoid(), title, completed: false });
    }
  };

  const deleteTodoItem = (id) => {
    if (isConnected) {
      deleteTodo(id).then((res) => {
        setTodos(res.data.data.removeTodo);
        setTodosToAsyncStorage(res.data.data.removeTodo);
      });
    } else {
      setTodos((prevState) => {
        const updatedState = prevState.filter((td) => td.id !== id);
        setTodosToAsyncStorage(updatedState);
        return updatedState;
      });
    }
  };

  const updateTodoItem = (id) => {
    if (isConnected) {
      updateTodo(id).then((res) => {
        setTodos(res.data.data.updateTodo);
        setTodosToAsyncStorage(res.data.data.updateTodo);
      });
    } else {
      setTodos((prevState) => {
        const newState = jsonCopy(prevState);
        const todoItem = newState.find((td) => td.id === id);
        todoItem.completed = !todoItem.completed;
        setTodosToAsyncStorage(newState);
        return newState;
      });
    }
  };

  const synchroniseTodos = () => {
    const reformattedTodos = formatGraphQlData(todos);
    syncTodos(reformattedTodos).then((res) => setTodos(res.data.data.syncTodos));
  };

  useEffect(() => {
    if (isMounted.current && isConnected) {
      synchroniseTodos();
    }
  }, [isConnected]);

  useEffect(() => {
    isMounted.current = true;

    if (!isConnected) {
      getTodosFromAsyncStorage().then((res) => setTodos(res));
    } else {
      getAllTodos().then((res) => {
        setTodos(res.data.data.getAllTodos);
        setTodosToAsyncStorage(res.data.data.getAllTodos);
      });
    }
  }, []);

  return (
    <View style={styles.screen}>
      <NetworkDetector />
      <TodoInput addTodoItem={addTodoItem} />
      <FlatList
        data={todos}
        renderItem={({ item }) => (
          <TodoItem todo={item} updateTodoItem={updateTodoItem} deleteTodoItem={deleteTodoItem} />
        )}
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
