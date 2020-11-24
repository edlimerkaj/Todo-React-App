import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, editTodo } from "../store/actions";

export default function Todo({ todo }) {
  const dispatch = useDispatch();
  const [editClicked, setEditClicked] = useState(false);
  const [newText, setNewText] = useState(todo.text);

  const checkTodo = () => {
    document.querySelector(`#todo-${todo.id}`).classList.toggle("check");
  };

  const onKeyPressHandler = event => {
    if (event.key === "Enter" && newText.length !== 0) {
      dispatch(editTodo(todo.id, newText));
      toggleInput();
    }
  };

  const toggleInput = () => {
    setEditClicked(e => !e);
  };

  return (
    <div className="todo">
      {editClicked ? (
        <input
          className="edit-input"
          type="text"
          value={newText}
          onChange={e => setNewText(e.target.value)}
          onKeyPress={onKeyPressHandler}
        />
      ) : (
        <p
          id={`todo-${todo.id}`}
          style={{ display: "inline-block" }}
          onClick={checkTodo}
        >
          {todo.text}
        </p>
      )}
      <span>
        <span onClick={toggleInput}>
          <i className="fas fa-edit"></i>
        </span>
        <span onClick={() => dispatch(deleteTodo(todo.id))}>
          <i className="fas fa-trash-alt"></i>
        </span>
      </span>
    </div>
  );
}
