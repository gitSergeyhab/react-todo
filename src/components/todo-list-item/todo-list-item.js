import React, {Component} from 'react';
import './todo-list-item.css';


export default class TodoListItem extends Component {

  state = {
    done: false,
    important: false
  };

  onLabelClick = () => {
      this.setState((state) => ({done: !state.done}))
  };

  onImportantClick = () => {
    this.setState((state) => ({important: !state.important}))
    }
  

  render() {
    const {label} = this.props;
    const {done, important} = this.state;
    let className = done ? 'todo-list-item done' : 'todo-list-item';
    className += important ? ' important' : '';

    return (
      <span className={className}>
        <span
          className="todo-list-item-label"
          onClick={this.onLabelClick}>
          {label}
        </span>

        <button type="button"
                className="btn btn-outline-success btn-sm float-right"
                onClick={this.onImportantClick}>
          <i className="fa fa-exclamation" />
        </button>

        <button type="button"
                className="btn btn-outline-danger btn-sm float-right">
          <i className="fa fa-trash-o" />
        </button>
      </span>
    );
  }
};
