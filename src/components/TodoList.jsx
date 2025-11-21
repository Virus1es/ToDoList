import TodoItem from "./TodoItem.jsx";
import {memo, useContext} from "react";
import {TaskContext} from "../context/TaskContext.jsx";

const TodoList = () => {
    const {
        tasks,
        filteredTasks,
    } = useContext(TaskContext);

    const hasTasks = tasks.length > 0;
    const isEmptyFilteredTasks = filteredTasks?.length === 0;

    if (!hasTasks) {
        return <div className="todo__empty-message">There are no tasks yet</div>
    }

    if(hasTasks && isEmptyFilteredTasks){
        return <div className="todo__empty-message">Tasks not found</div>
    }

    return (
        <ul className="todo__list">
            {(filteredTasks ?? tasks).map((task) => (
                <TodoItem
                    key={task.id}
                    className="todo__item"
                    {...task}
                />
            ))}
        </ul>
    )
}

export default memo(TodoList)