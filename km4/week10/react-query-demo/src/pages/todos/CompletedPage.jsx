import { useSelector } from "react-redux";
import ReduxTodoCard from "../../components/ReduxTodoCard";

const CompletedPage = () => {
    const todos = useSelector(state => state.todos.todos);

    const completedTodos = todos.filter(todo => todo.completed)

    return (
        <div>
            {
                completedTodos.map((todo, index) => (
                    <ReduxTodoCard 
                        key={index}
                        todo={todo}
                    />
                ))
            }
        </div>
    );
}

export default CompletedPage