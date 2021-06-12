import TodoListItem from '../todo-list-item/todo-list-item';
import './todo-list.css';

const TodoList = ({data, makeDel}) => {
    const elements = data.map(item => 
        <li key={item.id} className='list-group-item'>
            <TodoListItem
                label={item.label + '!'} 
                important={item.important}
                makeDel={() => makeDel(item.id)}
            />
        </li>);

    return (
        <ul className='list-group todo-list'>
            {elements}
        </ul> 
    );
};

export default TodoList;