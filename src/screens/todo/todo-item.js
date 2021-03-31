import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import CheckBox from 'react-native-check-box';
import { useIsConnected } from 'react-native-offline';
import { deleteTodo } from '../../api/delete-todo';
import { updateTodo } from '../../api/update-todo';
import { setTodosToAsyncStorage } from '../../services/async-storage';

export const TodoItem = ({ todo, setTodos }) => {
  const { id, title, completed } = todo;
  const isConnected = useIsConnected();

  const updateOnlineTodo = () => {
    alert('online');
    updateTodo(id).then((res) => {
      setTodos(res.data.data.updateTodo);
      setTodosToAsyncStorage(res.data.data.updateTodo);
    });
  };

  const updateOfflineTodo = () => {
    alert('offline');
    setTodos((prevState) => {
      const index = prevState.findIndex((item) => item.id === todo.id);
      if (index !== -1) {
        prevState[index].completed = !completed;
      }
      setTodosToAsyncStorage([...prevState]);
      return [...prevState];
    });
  };

  return (
    <View style={styles.wrapper}>
      <View style={styles.checkBoxWrapper}>
        <CheckBox
          checkBoxColor="#2089DC"
          isChecked={completed}
          onClick={() => {
            if (isConnected) {
              updateOnlineTodo();
            } else {
              updateOfflineTodo();
            }
          }}
        />
      </View>

      <View style={styles.textWrapper}>
        <Text style={{ fontSize: 16, textDecorationLine: completed ? 'line-through' : 'none' }}>
          {title}
        </Text>
      </View>

      <View style={styles.buttonWrapper}>
        <Button
          onPress={() =>
            deleteTodo(id).then((res) => {
              setTodos(res.data.data.removeTodo);
            })
          }
          type="clear"
          icon={<FontAwesomeIcon icon={faTrashAlt} size={22} color="#2089DC" />}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 5,
    paddingBottom: 5,
    borderBottomWidth: 0.5,
    borderColor: '#aeafb3',
  },
  checkBoxWrapper: {
    width: '11%',
    alignItems: 'center',
  },
  textWrapper: {
    width: '76%',
  },
  buttonWrapper: {
    width: '13%',
    alignItems: 'flex-start',
  },
});
