import React, {Component} from 'react';
import AppHeader from '../app-header/app-header';
import ItemStatusFilter from '../item-status-filter/item-status-filter';
import SearchPanel from '../search-panel/search-panel';
import TodoList from '../todo-list/todo-list';
import AddItem from '../add-item/add-item';

import './app.css';

export default class App extends Component {

  maxId = 100;

  state = {
    data: [
      {label: 'go to bad-1', important: true, id: 5},
      {label: 'go to bad0', important: true, id: 9},
      {label: 'wake up', important: false, id: 1},
      {label: 'have a lunch', important: false, id: 2},
      {label: 'go to bad', important: true, id: 3}
    ]
  }

  onAddClick = () => {
    this.setState(({data}) => {
      return {
        data: [
          ...data,
          {label: `new!!! ${this.maxId + 1}`, important: false, id: ++this.maxId}
        ]
      }
    })
  }

  makeDel = (id) => {
    this.setState(({data}) => {
      const idx = data.findIndex(el => el.id === id);
      return {
        data: [
          ...data.slice(0, idx),
          ...data.slice(idx + 1)
        ]
      }
    })
  }

  render() {
      return (
      <div className="todo-app">
        <AppHeader toDo={1} done={3} />
        <div className="top-panel d-flex">
          <SearchPanel />
          <ItemStatusFilter />
        </div>

        <TodoList 
          data={this.state.data}
          makeDel={this.makeDel}
        />
        <AddItem onAddClick={this.onAddClick}/>
      </div>
      );
    }

};
