import React, { Component } from 'react';
import TodoAction from '../../actions/TodoAction';

class Index extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      text: '',
    };
  }

  handleInput = ({ target }) => {
    this.setState({ text: target.value });
  }

  handleClickAddButton = () => {
    TodoAction.addTodo(this.state.text);
    this.setState({ text: '' });
  }

  handleChangeTodo = (id, completed) => () => {
    TodoAction.toggleChangeTodo(id, completed);
  }

  render = () => (
    <div id="index">
      <input type="text" value={this.state.text} onChange={this.handleInput} />
      <button onClick={this.handleClickAddButton}>新規！</button>
      <ul>{
        this.props.todoState.todos.map(todo => (
          <li key={todo.id}>
            {todo.title}
            <input type="checkbox" onChange={this.handleChangeTodo(todo.id, !todo.completed)} />
          </li>
        ))   
      }</ul>
    </div>
  )
}

export default Index;
