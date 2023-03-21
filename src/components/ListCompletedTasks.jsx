import React from 'react'
import ItemCompletedTask from './ItemCompletedTask'

const ListCompletedTasks = ({ completedTasks, removeTaskCompleted }) => {
  return (
    <div className='md:w-1/2 m-5 mb-10'>
      <h1 className='font-black text-center text-xl my-5'>Tareas Completadas</h1>
      {
        completedTasks.length > 0
          ? (
            <div>
              {
                completedTasks.map(task => (
                  <ItemCompletedTask
                    key={task.id}
                    task={task}
                    removeTaskCompleted={removeTaskCompleted}
                  />
                ))
            }
            </div>
            )
          : (
            <div className='bg-orange-100 border-l-4 border-orange-500 text-orange-700 p-4' role='alert'>
              <p className='font-bold'>Vacio</p>
              <p>Aun no has marcado ninguna tarea como completada</p>
            </div>
            )
      }
    </div>
  )
}

export default ListCompletedTasks
