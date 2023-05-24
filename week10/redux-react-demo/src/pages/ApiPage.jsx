import { useMutation, useQuery, useQueryClient } from "react-query";
import { getTodos, postTodo } from "../api";
import ApiTodoCard from "../components/ApiTodoCard";
import { useState } from "react";

const ApiPage = () => {
    const [userInput, setUserInput] = useState("");

    const queryClient = useQueryClient();
    const { isLoading, data: todos } = useQuery("todos", getTodos);

    const postTodoMutation = useMutation(postTodo, {
        onSuccess: () => {
          // Invalidate and refetch
          queryClient.invalidateQueries('todos')
        },
    });

    const handleCreateTodo = (e) => {
        e.preventDefault();
        if (userInput === "") return;

        postTodoMutation.mutate({
            content: userInput
        });
    }

    if (isLoading) return <h1>Loading...</h1>

    return (
        <div>
            <form className="flex gap-2 p-2" onSubmit={handleCreateTodo}>
                <input 
                    type="text"
                    value={userInput}
                    onChange={(e) => setUserInput(e.target.value)}
                    placeholder="Enter your todo message"
                    className="p-2 w-full border-cyan-400 border-solid border-2 rounded"
                />
                <input type="submit" className="btn" value="Create" />
            </form>
            <p className="p-2">Todos Count: {todos?.length}</p>
            <div className="p-2">
                {todos?.map(todo => <ApiTodoCard todo={todo} key={todo.id}/>)}
            </div>
        </div>
    )
}

export default ApiPage;