import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

export const TodoItem = ({ todo, updateTodoItem, deleteTodoItem }) => {
  const { id, title, completed } = todo;

  return (
    <View style={styles.wrapper}>
      <View style={styles.checkBoxWrapper}>
        <BouncyCheckbox isChecked={completed} onPress={() => updateTodoItem(id)} />
      </View>

      <View style={styles.textWrapper}>
        <Text style={{ fontSize: 16, textDecorationLine: completed ? 'line-through' : 'none' }}>
          {title}
        </Text>
      </View>

      <View style={styles.buttonWrapper}>
        <Button
          onPress={() => deleteTodoItem(id)}
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
