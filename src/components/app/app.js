import AppHeader from '../app-header/app-header';
import ItemStatusFilter from '../item-status-filter/item-status-filter';
import SearchPanel from '../search-panel/search-panel';
import TodoList from '../todo-list/todo-list';

import './app.css';

const App = () => {
  const data = [
    {label: 'wake up', important: false, id: 1},
    {label: 'have a lunch', important: false, id: 2},
    {label: 'go to bad', important: true, id: 3}
  ]
  // const isLogin = false;
  // const login = <p>Login NOW!</p>
  return (
    <div className="todo-app">
      <AppHeader toDo={1} done={3} />
      <div className="top-panel d-flex">
        <SearchPanel />
        <ItemStatusFilter />
      </div>

      <TodoList data={data} />
    </div>
  );
};

export default App;