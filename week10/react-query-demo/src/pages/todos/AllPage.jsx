import { useSelector } from "react-redux";

import ReduxTodoCard from "../../components/ReduxTodoCard";

const AllPage = () => {
    const todos = useSelector(state => state.todos.todos);

    return (
        <div>
            {
                todos.map((todo, index) => (
                    <ReduxTodoCard 
                        key={index}
                        todo={todo}
                    />
                ))
            }
        </div>
    );
}

export default AllPage