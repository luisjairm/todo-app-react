import React from 'react'

const ItemCompletedTask = ({ task, removeTaskCompleted }) => {
  const { name, priority, id } = task

  const handleDelete = () => {
    // eslint-disable-next-line no-undef
    const response = confirm('¿Quieres eliminar la tarea antes de completarla?')
    if (response) {
      removeTaskCompleted(id)
    }
  }
  const optionColors = {
    alta: 'uppercase text-red-700 font-bold',
    media: 'uppercase text-yellow-700 font-bold',
    baja: 'uppercase text-green-700 font-bold'
  }
  return (
    <div className='bg-white rounded-xl p-3 mb-2 shadow-md flex flex-row justify-between'>
      <div>
        <div>
          <h3 className='uppercase font-bold'>Tarea:</h3>
          <p>{name}</p>
        </div>
        <div className='mt-2'>
          <h3 className='uppercase font-bold'>Prioridad:</h3>
          <p className={optionColors[priority]}>{priority}</p>
        </div>
      </div>
      <div className='flex flex-col justify-center'>
        <span onClick={handleDelete}>
          <svg
            className='fill-current h-5 w-5 text-red-500  hover:text-red-700'
            role='button'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 448 512'
          ><path d='M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z' />
          </svg>
        </span>

      </div>
    </div>
  )
}

export default ItemCompletedTask
