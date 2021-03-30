import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import CheckBox from 'react-native-check-box';

export const TodoItem = ({ todo }) => {
  const { id, title, completed } = todo;
  return (
    <View style={styles.wrapper}>
      <View style={styles.checkBoxWrapper}>
        <CheckBox
          checkBoxColor="#2089DC"
          isChecked={completed}
          onClick={() => console.log('checked')}
        />
      </View>

      <View style={styles.textWrapper}>
        <Text style={{ fontSize: 16 }}>{title}</Text>
      </View>

      <View style={styles.buttonWrapper}>
        <Button
          onPress={() => console.log(id)}
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
