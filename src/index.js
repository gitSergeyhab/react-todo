import React from 'react';
import ReactDOM from 'react-dom';
import AppHeader from './components/app-header';
import SearchPanel from './components/search-panel';
import TodoList from './components/todo-list';

const App = () => {
  const data = [
    {label: 'wake up', important: false, id: 1},
    {label: 'have a lunch', important: false, id: 2},
    {label: 'go to bad', important: true, id: 3}
  ]
  const isLogin = false;
  const login = <p>Login NOW!</p>
  return (  
    <div>
      {isLogin ? null : login}
      <span>{(new Date()).toString()}</span>
      <AppHeader/>
      <SearchPanel/>
      <TodoList data={data}/>
    </div>
  );
};

ReactDOM.render(<App/>, document.querySelector('#root'));