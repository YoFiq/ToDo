import axios from 'axios';
import { ADD_TODO_QUERY, GRAPHQL_API } from '../shared/constans';

export const addTodo = (title) => axios.post(GRAPHQL_API, { query: ADD_TODO_QUERY(title) });
