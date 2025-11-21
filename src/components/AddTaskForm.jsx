import Field from "./Field.jsx";
import Button from "./Button.jsx";
import {useContext} from "react";
import {TaskContext} from "../context/TaskContext.jsx";

const AddTaskForm = () => {
    const {
        newTaskTitle,
        setNewTaskTitle,
        addTask,
        newTaskInputRef,
    } = useContext(TaskContext);

    const onSubmit = (event) => {
        event.preventDefault();
        addTask();
    }

    return (
        <form className="todo__form" onSubmit={onSubmit}>
            <Field
                className="todo__field"
                label="New Task title"
                id="new-task"
                value={newTaskTitle}
                onInput={(event) => setNewTaskTitle(event.target.value)}
                ref={newTaskInputRef}
            />
            <Button type="submit">Add</Button>
        </form>
    )
}

export default AddTaskForm;