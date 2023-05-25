/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux";

import { actions } from "../features/todos/todosSlice";
import TodoCard from "./TodoCard";

const ReduxTodoCard = ({
    todo,
}) => {
    const dispatch = useDispatch();

    const handleToggle = (id) => {
        dispatch(actions.toggleTodo({ id }))
    }

    const handleRemove = (id) => {
        dispatch(actions.deleteTodo({ id }))
    }

    console.log(todo)

    return (
        <TodoCard 
            content={todo.content}
            completed={todo.completed}
            onToggle={() => handleToggle(todo.id)}
            onRemove={() => handleRemove(todo.id)}
        />
    )
}

export default ReduxTodoCard;