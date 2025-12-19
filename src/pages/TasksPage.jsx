import {TasksProvider} from "../context/TaskContext.jsx";
import Todo from "../components/Todo.jsx";

const TasksPage = () => {
    return (
        <TasksProvider>
            <Todo />
        </TasksProvider>
    )
}

export default TasksPage;