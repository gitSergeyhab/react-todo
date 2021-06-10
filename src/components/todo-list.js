import TodoListItem from './todo-list-item'

const TodoList = ({data}) => {
    const elements = data.map(item => 
        <li key={item.id}><TodoListItem
            label={item.label + '!'} 
            important={item.important}/>
        </li>);

    return (
        <ul>
            {elements}
        </ul> 
    );
};

export default TodoList;