import React from 'react'
import ItemCompletedTask from './ItemCompletedTask'

const ListCompletedTasks = ({ completedTasks }) => {
  console.log(JSON.stringify(completedTasks, null, 2))
  return (
    <div className='w-full'>
      <h1 className='font-black text-center text-xl my-5'>Tareas Completadas</h1>
      <div>
        {
                completedTasks.map(task => (
                  <ItemCompletedTask
                    key={task.id}
                    task={task}
                  />
                ))
            }
      </div>
    </div>
  )
}

export default ListCompletedTasks
