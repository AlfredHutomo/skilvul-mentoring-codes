import { useSelector } from "react-redux";
import ReduxTodoCard from "../../components/ReduxTodoCard";

const ActivePage = () => {
    const todos = useSelector(state => state.todos.todos);

    const activeTodos = todos.filter(todo => !todo.completed)

    return (
        <div>
            {
                activeTodos.map((todo, index) => (
                    <ReduxTodoCard 
                        key={index}
                        todo={todo}
                    />
                ))
            }
        </div>
    );
}

export default ActivePage