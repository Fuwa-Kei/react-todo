import React from 'react'
import { RxCross2 } from 'react-icons/rx'
import { MdDone } from 'react-icons/md'

function Task(props) {
  return (

            <div className="tasks" style={{textDecoration: props.completed ? "line-through" : null}}>
              <p>{props.taskName}</p>
              <div className="buttons">
              <button onClick={() => props.deleteTask(props.id)}><RxCross2 /></button>
              <button onClick={() => props.completeTask(props.id)}> <MdDone /> </button></div>
            </div>
  )
}

export default Task