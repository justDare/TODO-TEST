import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./Dashboard.scss";
import Todo from "../components/Todo";
import { toast } from "react-toastify";
import { clearTodoMessage } from "../actions/todoActions";

export default function Dashboard() {
  const { todos, message } = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  useEffect(() => {
    if (message === "Todo deleted!") {
      toast.error("Todo deleted!");
      dispatch(clearTodoMessage());
    } else if (message === "Todo completed!") {
      toast.success("Todo completed!");
      dispatch(clearTodoMessage());
    }
  }, [message, dispatch]);

  return (
    <div className="dashboard container">
      <div className="todos">
        {todos.map((todo) => {
          return <Todo key={todo.id} todo={todo} />;
        })}
      </div>
    </div>
  );
}
