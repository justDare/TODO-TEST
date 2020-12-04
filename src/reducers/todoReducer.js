import { TODO_DONE, DELETE_TODO, CLEAR_TODO_MESSAGE } from "../types";

const initialState = {
  todos: [
    {
      id: 1,
      title: "Call Avni",
      header: "Touch 3 | Inbound NY",
      confirmation: "Did you call avi?",
      icon: "call",
      status: "todo",
    },
    {
      id: 2,
      title: "Manual Task",
      header: "Touch 5 | Rekindling Ancient members",
      confirmation: "Did you do it?",
      icon: "linkedin",
      status: "todo",
    },
    {
      id: 3,
      title: "Manual Task Yet Again",
      header: "Touch 6 | Rekindling Ancient members",
      confirmation: "Did you do it this time?",
      icon: "linkedin",
      status: "todo",
    },
  ],
  message: "",
};

export default function (state = initialState, action) {
  switch (action.type) {
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload.id),
        message: "Todo deleted!",
      };
    case TODO_DONE:
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id === action.payload.id) return { ...todo, status: "done" };
          else return todo;
        }),
        message: "Todo completed!",
      };
    case CLEAR_TODO_MESSAGE:
      return {
        ...state,
        message: "",
      };
    default:
      return state;
  }
}
