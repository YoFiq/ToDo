export const GRAPHQL_API = 'http://localhost:3005/graphql';

export const GET_TODOS_QUERY = `
  query getAllTodos {
    getAllTodos{
      id, title, completed
    }
  }
`;

export const ADD_TODO_QUERY = (title) => `
mutation createTodo {
  addTodo(todo:{
    title:"${title}"
  }){
    id,title,completed
  }
}
`;

export const DELETE_TODO_QUERY = (id) => `
mutation createTodo {
  removeTodo(id:"${id}"){
    id,title,completed
  }
}
`;

export const UPDATE_TODO_QUERY = (id) => `
mutation createTodo {
  updateTodo(id:"${id}"){
    id,title,completed
  }
}
`;

export const SYNC_TODOS_QUERY = (todos) => `
mutation syncTodos {
  syncTodos(todos:${todos})
  {id,title,completed}
}
`;
