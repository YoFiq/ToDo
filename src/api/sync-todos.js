import axios from 'axios';
import { GRAPHQL_API, SYNC_TODOS_QUERY } from '../shared/constans';

export const syncTodos = (todos) => axios.post(GRAPHQL_API, { query: SYNC_TODOS_QUERY(todos) });
