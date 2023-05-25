/* eslint-disable react/prop-types */
import { BsFillTrashFill } from "react-icons/bs"

const TodoCard = ({
    content,
    completed,
    onToggle,
    onRemove,
}) => {
    return (
        <div className="flex justify-between p-2 bg-slate-300 rounded mb-4 items-center">
            <p>{content}</p>
            <div className="flex gap-1 items-center">
                <input
                    type="checkbox"
                    name="completed"
                    checked={completed}
                    onChange={onToggle}
                />
                <label htmlFor="completed">Completed</label>
                <div></div>
                <button className="btn" onClick={onRemove}>
                    <BsFillTrashFill/>
                </button>
            </div>
        </div>
    )
}

export default TodoCard;