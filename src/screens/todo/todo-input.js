import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { Button } from 'react-native-elements';

export const TodoInput = ({ addTodoItem }) => {
  const [text, setText] = React.useState('');

  const onAddTodo = () => {
    if (text !== '') {
      addTodoItem(text);
      setText('');
    } else {
      // eslint-disable-next-line no-alert
      alert('Todo text is required');
    }
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
        onPress={onAddTodo}
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
