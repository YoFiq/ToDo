import axios from 'axios';
import { GET_TODOS_QUERY, GRAPHQL_API } from '../shared/constans';

export const getAllTodos = () => axios.post(GRAPHQL_API, { query: GET_TODOS_QUERY });
