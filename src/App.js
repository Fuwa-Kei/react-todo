
import { useState } from 'react';
import './App.css';
import Task from './Task';


function App() {

  const [todoList, setTodoList] = useState([]);
  const [newTask, setTask] = useState("");

  const handleChange = (e) => {
      setTask(e.target.value);
  }

  const addTask = () => {
    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length-1].id+1,
      taskName: newTask
    }
    setTodoList([...todoList, task]);
    setTask('');
  }

  const deleteTask = (id) => {
    setTodoList(todoList.filter((task) =>  task.id !== id))
  }

  const completeTask = (id) => {
    setTodoList (
      todoList.map((task) => {
        if (task.id === id) {
          return {...task, completed: true};
      } else {
        return task;
      }
      })
    )
  }

  return (
    <div className="App">
        <div className="addTask">
          <input value={newTask} onInput={handleChange}  />
          <button onClick={addTask}>Add Task</button>
        </div>
        {todoList.map((task) => {
          return (
            <Task 
              id={task.id}
              taskName={task.taskName}
              deleteTask={deleteTask}
              completeTask={completeTask}
              completed={task.completed} />
          )
        })}
    </div>
  );
}

export default App;
