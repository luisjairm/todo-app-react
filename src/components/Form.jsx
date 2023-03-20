import { useState } from 'react'

const Form = () => {
  const [taskName, setTaskName] = useState('')
  const [taskPriority, setTaskPriority] = useState('alta')

  const handleSubmit = (e) => {
    e.preventDefault()

    console.log({ taskName, taskPriority })
  }

  return (
    <div className='md:w-2/5 rounded mr-5'>
      <h1 className='font-black text-center text-xl mb-5'>Agrega tus tareas</h1>
      <form
        className='bg-white shadow-md p-5 rounded-md'
        onSubmit={handleSubmit}
      >
        <div>
          <label
            htmlFor='task'
            className='block font-semibold text-xl mb-2'
          >Tarea
          </label>
          <input
            onChange={e => setTaskName(e.target.value)}
            type='text'
            id='task'
            className='w-full border-2 border-gray-400 rounded p-2'
            placeholder='Escribe tu tarea'
          />
        </div>
        <div>
          <label
            htmlFor='priority'
            className='block font-semibold text-xl mb-2'
          >Prioridad
          </label>
          <select
            className='w-1/3 border-2 border-gray-400 rounded p-2'
            name='priority'
            id='priority'
            onChange={(e) => setTaskPriority(e.target.value)}
          >
            <option value='alta'>Alta</option>
            <option value='media'>Media</option>
            <option value='baja'>Baja</option>
          </select>
        </div>
        <input
          type='submit'
          value='Agregar Tarea'
          className='bg-green-500 hover:bg-green-700 rounded px-5 py-1 text-white text-xl mt-5 '
        />
      </form>
    </div>
  )
}

export default Form
