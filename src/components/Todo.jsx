import AddTaskForm from "./AddTaskForm.jsx";
import SearchTaskForm from "./SearchTaskForm.jsx";
import TodoInfo from "./TodoInfo.jsx";
import TodoList from "./TodoList.jsx";

const Todo = () => {
    const tasks = [
        {id: 'task-1', title: 'Купить молоко', isDone: false},
        {id: 'task-2', title: 'Погладить кота', isDone: true},
    ]

    const deleteAllTasks = () => {
        console.log('Все задачи удалены!')
    }

    const deleteTask = (taskId) => {
        console.log(`Удалил задачу с id: ${taskId}`)
    }

    const toggleTaskComplete = (taskId, isDone) => {
        console.log(`Задача ${taskId} ${isDone ? '' : 'не '}выполнена`)
    }

    const filterTasks = (query) => {
        console.log(`Поиск по: ${query}`)
    }

    const addTask = () => {
        console.log('Задачу добавил!')
    }



    return (
        <div className="todo">
            <h1 className="todo__title">To Do List</h1>
            <AddTaskForm
                addTask={addTask}
            />
            <SearchTaskForm
                onSearchInput={filterTasks}
            />
            <TodoInfo
                total={tasks.length}
                done={tasks.filter(({ isDone }) => isDone).length}
                onDeleteAllButtonClick={deleteAllTasks}
            />
            <TodoList
                tasks={tasks}
                onDeleteTaskButtonClick={deleteTask}
                onTaskCompleteChange={toggleTaskComplete}
            />
        </div>
    )
}

export default Todo