import React, {Component} from 'react';
import './todo-list-item.css';


export default class TodoListItem extends Component {

  state = {
    done: false,
    important: false
  };

  onLabelClick = () => {
    if (this.state.done) {
      this.setState({
        done: false
      })
    } else {
      this.setState({
        done: true
      })
    }
  };

  onImportantClick = () => {
    if (this.state.important) {
      this.setState({
        important: false
      })
    } else {
      this.setState({
        important: true
      })
    }
  }

  render() {
    const {label} = this.props;
    const {done, important} = this.state;
    let className = done ? 'todo-list-item done' : 'todo-list-item';
    className += important ? ' important' : '';


    // const style = {
    //   color: important ? 'steelblue' : 'black',
    //   fontWeight: important ? 'bold' : 'normal'
    // };

    return (
      <span className={className}>
        <span
          className="todo-list-item-label"
          // style={style}
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
