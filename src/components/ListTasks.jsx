import React from 'react'
import ItemTasks from './ItemTasks'

const ListTasks = ({ tasks, completeTask, removeTask }) => {
  return (
    <div className='md:w-1/2 m-5'>
      <h1 className='font-black text-center text-xl mb-5'>Tareas Pendientes</h1>
      <div>
        {
            tasks.map(task => (
              <ItemTasks
                key={task.id}
                task={task}
                completeTask={completeTask}
                removeTask={removeTask}
              />

            ))
        }
      </div>
    </div>
  )
}

export default ListTasks
