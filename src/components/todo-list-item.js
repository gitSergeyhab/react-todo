const TodoListItem = ({label, important = false}) => {
    const style = {
        color: important ? 'orange' : 'green'
    };
    return <span style={style} >{label}</span>;
} 

export default TodoListItem;