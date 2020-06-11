import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Todo.css";
import yesIcon from "../assets/tick_icon.png";
import doneIcon from "../assets/red_tick.png";
import cutIcon from "../assets/cut.png";

export default function Todo(props) {
  return (
    <div className="row todo">
      <div className="col-2">
        <button
          className="btn toggle_button"
          onClick={(e) => props.toggleTodo(props.todo.id)}
        >
          {" "}
          <img src={props.todo.completed ? doneIcon : yesIcon} />
        </button>
      </div>
      <div className={`col-8 todo_text ${props.todo.completed ? "done" : ""}`}>
        {props.todo.text}
      </div>
      <div className="col-2">
        <button onClick={(e) => props.handleRemove(props.todo.id)}>
          {" "}
          <img src={cutIcon} />
        </button>
      </div>
    </div>
  );
}
