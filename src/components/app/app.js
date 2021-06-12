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
      {label: 'go to bad-1', done: false, important: true, id: 5},
      {label: 'go to bad0', done: false, important: true, id: 9},
      {label: 'wake up', done: false, important: false, id: 1},
      {label: 'have a lunch', done: false, important: false, id: 2},
      {label: 'go to bad', done: false, important: true, id: 3}
    ]
  }

  onAddClick = () => {
    this.setState(({data}) => {
      return {
        data: [
          ...data,
          {label: `new!!! ${this.maxId}`, important: false, id: this.maxId++}
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

  onToggleImportant = (id) => console.log('imp', id);

  makeNewArray = (arr, id, prop) => {
    const idx = arr.findIndex(el => el.id === id);
    const newElement = {...arr[idx], [prop]: !arr[idx][prop]};
    console.log(newElement)
    return  [
      ...arr.slice(0, idx),
      newElement,
      ...arr.slice(idx + 1)
    ]
  }


 
  onToggleDone  = (id) => {
    this.setState(({data}) => {
      const newArray = this.makeNewArray(data, id, 'done');
      return {data: newArray}
    })
  }

  onToggleImportant  = (id) => {
    this.setState(({data}) => {
      const newArray = this.makeNewArray(data, id, 'important');
      return {data: newArray}
    })
  }
  

  render() {   
    const data = this.state.data;
    const done = data.filter(el => el.done).length;
    const toDo = data.length - done;

    return (
    <div className="todo-app">
      <AppHeader toDo={done} done={toDo} />
      <div className="top-panel d-flex">
        <SearchPanel />
        <ItemStatusFilter />
      </div>

      <TodoList 
        data={this.state.data}
        makeDel={this.makeDel}
        onToggleImportant={this.onToggleImportant}
        onToggleDone = {this.onToggleDone}
      />
      <AddItem onAddClick={this.onAddClick}/>
    </div>
    );
  }

};
