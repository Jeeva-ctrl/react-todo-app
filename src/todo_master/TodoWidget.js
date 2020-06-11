import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Todo from "./components/Todo";
import { connect } from "react-redux";
import { addTodo, removeTodo, toggleTodo } from "./actions/TodoAction";

class TodoWidget extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      addTodoText: "",
    };
    this.state.handleSubmit = this.handleSubmit;
    this.state.handleInputChnage = this.handleInputChnage;
    this.state.handleRemove = this.handleRemove;
    this.state.toggleTodo = this.toggleTodo;
  }
  toggleTodo = (id) => {
    this.props.toggleTodo(id);
  };
  handleRemove = (id) => {
    this.props.removeTodo(id);
  };
  handleInputChnage = (e) => {
    this.setState({ addTodoText: e.target.value });
  };
  handleSubmit = (e) => {
    this.props.addTodo(this.state.addTodoText);
    this.setState({ addTodoText: "" });
  };

  
  render() {
    let elements = this.props.todos.map((todo) => {
      return (
        todo &&
        todo.id != undefined && (
          <Todo
            key={todo.id}
            toggleTodo={this.toggleTodo}
            handleRemove={this.handleRemove}
            todo={todo}
          />
        )
      );
    });
    return (
      <div className="container">
        <div className="section_title">
          <h1>Todo List</h1>
        </div>
        <div className="todo_container">{elements}</div>
        <div className="row addTodo_Container">
          <div className="add_input col-8">
            <input
              placeholder="add a new Todo"
              value={this.state.addTodoText}
              onChange={this.handleInputChnage}
            />
          </div>
          <button
            className="col-4"
            onClick={this.handleSubmit}
            className="btn btn-primary"
          >
            Add Todo
          </button>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  todos: state.todos,
});

const mapDispatchToProps = (dispatch) => ({
  addTodo: (text) => dispatch(addTodo(text)),
  removeTodo: (id) => dispatch(removeTodo(id)),
  toggleTodo: (id) => dispatch(toggleTodo(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoWidget);
