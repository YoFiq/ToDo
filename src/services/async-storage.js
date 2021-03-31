import AsyncStorage from '@react-native-async-storage/async-storage';

export const getTodosFromAsyncStorage = async () => {
  const jsonValue = await AsyncStorage.getItem('@todos');
  return jsonValue != null ? JSON.parse(jsonValue) : [];
};

export const setTodosToAsyncStorage = async (todos) => {
  const jsonValue = JSON.stringify(todos);
  await AsyncStorage.setItem('@todos', jsonValue);
};

export const removeTodosFromAsyncStorage = async () => {
  await AsyncStorage.removeItem('@todos');
};
