import React from 'react'

function Task(props) {
  return (

            <div className="tasks" style={{textDecoration: props.completed ? "line-through" : null}}>
              <p>{props.taskName}</p>
              <button onClick={() => props.deleteTask(props.id)}>X</button>
              <button onClick={() => props.completeTask(props.id)}> Complete </button>
            </div>
  )
}

export default Task