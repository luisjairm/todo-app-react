import React from 'react'
import ItemTasks from './ItemTasks'

const ListTasks = ({ tasks, completeTask, removeTask, setTaskEditing }) => {
  return (
    <div className='md:w-1/2 m-5 md:h-screen overflow-y-scroll'>
      <h1 className='font-black text-center text-xl mb-5'>Tareas Pendientes</h1>
      {
      tasks.length > 0
        ? (
          <div>
            {
            tasks.map(task => (
              <ItemTasks
                key={task.id}
                task={task}
                completeTask={completeTask}
                removeTask={removeTask}
                setTaskEditing={setTaskEditing}
              />

            ))
        }
          </div>
          )
        : (
          <div className='bg-green-200 border-l-4 border-green-500 text-green-700 p-4' role='alert'>
            <p className='font-bold'> No tienes tareas pendientes</p>
          </div>
          )
}
    </div>
  )
}

export default ListTasks
