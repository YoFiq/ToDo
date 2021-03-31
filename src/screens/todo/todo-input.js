import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { Button } from 'react-native-elements';
import 'react-native-get-random-values';
import { nanoid } from 'nanoid';
import { useIsConnected } from 'react-native-offline';
import { addTodo } from '../../api/add-todo';
import { setTodosToAsyncStorage } from '../../services/async-storage';

export const TodoInput = ({ setTodos }) => {
  const [text, setText] = React.useState('');
  const isConnected = useIsConnected();

  const addOnlineTodo = () => {
    addTodo(text).then((res) => {
      setTodos((prevState) => {
        prevState.push(res.data.data.addTodo);
        setTodosToAsyncStorage([...prevState]);
        return [...prevState];
      });
      setText('');
    });
  };

  const addOfflineTodo = () => {
    setTodos((prevState) => {
      prevState.push({ id: nanoid(), title: text, completed: false });
      setTodosToAsyncStorage([...prevState]);
      return [...prevState];
    });
  };

  return (
    <View style={styles.screen}>
      <TextInput
        style={styles.input}
        onChangeText={setText}
        value={text}
        placeholder="Add a todo..."
        placeholderTextColor="#535354"
      />
      <Button
        onPress={() => {
          if (text !== '') {
            if (isConnected) {
              addOnlineTodo();
            } else {
              addOfflineTodo();
            }
          } else {
            // eslint-disable-next-line no-alert
            alert('Todo text is required');
          }
        }}
        style={styles.button}
        type="clear"
        icon={<FontAwesomeIcon icon={faPlus} size={26} color="#2089DC" />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    borderBottomWidth: 0.5,
    borderColor: '#aeafb3',
  },
  input: {
    height: 50,
    width: '80%',
    fontSize: 18,
  },
  button: {
    width: '10%',
    alignSelf: 'center',
  },
});
