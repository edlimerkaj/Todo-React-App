export const ADD_TODO = "addTodo";
export const DEL_TODO = "deleteTodo";
export const EDIT_TODO = "editTodo";

export const addTodo = data => {
  return {
    type: ADD_TODO,
    data
  };
};

export const deleteTodo = id => {
  return {
    type: DEL_TODO,
    id
  };
};

export const editTodo = (id, newText) => {
  return {
    type: EDIT_TODO,
    id,
    newText
  };
};
