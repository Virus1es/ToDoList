import Field from "./Field.jsx";
import Button from "./Button.jsx";
import {useContext, useState} from "react";
import {TaskContext} from "../context/TaskContext.jsx";

const AddTaskForm = () => {
    const {
        newTaskTitle,
        setNewTaskTitle,
        addTask,
        newTaskInputRef,
    } = useContext(TaskContext);

    const [error, setError] = useState('');

    const clearNewTaskTitle = newTaskTitle.trim();
    const isNewTaskTitleEmpty = clearNewTaskTitle.length === 0;

    const onSubmit = (event) => {
        event.preventDefault();
        if(!isNewTaskTitleEmpty) {
            addTask(clearNewTaskTitle);
        }
    }

    const onInput = (event) => {
        const { value } = event.target;

        const clearValue = value.trim();
        const hasOnlySpaces = value.length > 0 && clearValue.length === 0;

        setNewTaskTitle(value);
        setError(hasOnlySpaces ? 'The task can\'t be empty' : '');
    }

    return (
        <form className="todo__form" onSubmit={onSubmit}>
            <Field
                className="todo__field"
                label="New Task title"
                id="new-task"
                value={newTaskTitle}
                error={error}
                onInput={onInput}
                ref={newTaskInputRef}
            />
            <Button
                type="submit"
                isDisabled={newTaskTitle.trim().length === 0}
            >
                Add
            </Button>
        </form>
    )
}

export default AddTaskForm;