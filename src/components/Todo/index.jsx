import React, { useState } from "react";
import "./index.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faTimes,
  faChevronRight,
  faChevronLeft,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { useDispatch } from "react-redux";
import { markTodoDone, deleteTodo } from "../../actions/todoActions";

export default function Todo({ todo }) {
  const [clicked, setClicked] = useState(false);

  const dispatch = useDispatch();

  const handleTodoDoneClick = () => {
    dispatch(markTodoDone(todo.id));
  };

  const handleDeleteTodo = () => {
    dispatch(deleteTodo(todo.id));
  };

  const getIcon = (iconString) => {
    if (iconString === "call")
      return <FontAwesomeIcon className="rounded-icon" icon={faPhone} />;
    else if (iconString === "linkedin") {
      return <FontAwesomeIcon className="rounded-icon" icon={faLinkedinIn} />;
    }
  };

  return (
    <div
      className="todo"
      data-status={todo.status}
      data-clicked={clicked}
      onClick={() => setClicked(!clicked)}
    >
      <div className="close-icon">
        <FontAwesomeIcon icon={faChevronLeft} />
      </div>
      <div className="icon">{getIcon(todo.icon)}</div>
      <div className="info">
        {clicked ? (
          <p className="mb-0">{todo.confirmation}</p>
        ) : (
          <>
            <p className="mb-0 header">{todo.header}</p>
            <p className="mb-0">{todo.title}</p>
          </>
        )}
      </div>
      <div className="actions">
        <FontAwesomeIcon
          onClick={handleTodoDoneClick}
          className={clicked ? "rounded-icon" : "regular-icon"}
          icon={faCheck}
        />
        <FontAwesomeIcon
          onClick={handleDeleteTodo}
          className={clicked ? "rounded-icon" : "regular-icon"}
          icon={faTimes}
        />
      </div>
      <div className="open-icon">
        <FontAwesomeIcon icon={faChevronRight} />
      </div>
    </div>
  );
}
