import axios from 'axios';
import { GRAPHQL_API, UPDATE_TODO_QUERY } from '../shared/constans';

export const updateTodo = (id) => axios.post(GRAPHQL_API, { query: UPDATE_TODO_QUERY(id) });
