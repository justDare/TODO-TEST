import { TODO_DONE, DELETE_TODO, CLEAR_TODO_MESSAGE } from "../types";

export const markTodoDone = (todoId) => (dispatch) => {
  dispatch({
    type: TODO_DONE,
    payload: { id: todoId },
  });
};

export const deleteTodo = (todoId) => (dispatch) => {
  dispatch({
    type: DELETE_TODO,
    payload: { id: todoId },
  });
};

export const clearTodoMessage = () => (dispatch) => {
  dispatch({
    type: CLEAR_TODO_MESSAGE,
  });
};
