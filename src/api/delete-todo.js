import axios from 'axios';
import { DELETE_TODO_QUERY, GRAPHQL_API } from '../shared/constans';

export const deleteTodo = (id) => axios.post(GRAPHQL_API, { query: DELETE_TODO_QUERY(id) });
