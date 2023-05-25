/* eslint-disable react/prop-types */
import { useMutation, useQueryClient } from "react-query"
import { deleteTodo, updateTodo } from "../utils/api"
import TodoCard from "./TodoCard";

const ApiTodoCard = ({
    todo,
}) => {
    const queryClient = useQueryClient();
    const updateTodoMutation = useMutation(updateTodo, {
        onSuccess: () => {
          // Invalidate and refetch
          queryClient.invalidateQueries('todos');
        },
    });

    const removeTodoMutation = useMutation(deleteTodo, {
        onSuccess: () => {
          // Invalidate and refetch
          queryClient.invalidateQueries('todos')
        },
    });
    
    const handleToggle = (todo) => {
        const updatedTodo = {
            ...todo,
            completed: !todo.completed
        }
        updateTodoMutation.mutate(updatedTodo)
    }

    const handleRemove = (todo) => {
        removeTodoMutation.mutate(todo)
    }   

    return (
        <TodoCard 
            content={todo.content}
            completed={todo.completed}
            onToggle={() => handleToggle(todo)}
            onRemove={() => handleRemove(todo)}
        />
    )
}

export default ApiTodoCard;