/* eslint-disable react/prop-types */
import { BsFillTrashFill } from "react-icons/bs"
import { useMutation, useQueryClient } from "react-query"
import { deleteTodo, updateTodo } from "../api"

const ApiTodoCard = ({
    todo,
}) => {
    const queryClient = useQueryClient();
    const updateTodoMutation = useMutation(updateTodo, {
        onSuccess: () => {
          // Invalidate and refetch
          queryClient.invalidateQueries('todos')
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
        <div className="flex justify-between p-2 bg-slate-300 rounded mb-4 items-center">
        <p>{todo.content}</p>
        <div className="flex gap-1 items-center">
            <input
                type="checkbox"
                name="completed"
                checked={todo.completed}
                onChange={() => handleToggle(todo)}
            />
            <label htmlFor="completed">Completed</label>
            <div></div>
            <button className="btn" onClick={() => handleRemove(todo)}>
                <BsFillTrashFill/>
            </button>
        </div>
    </div>
    )
}

export default ApiTodoCard;