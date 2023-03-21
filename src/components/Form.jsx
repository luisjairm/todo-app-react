import { useEffect, useState } from 'react'
import Error from './Error'

const Form = ({ tasks, setTasks, taskEditing, setTaskEditing }) => {
  const [taskName, setTaskName] = useState('')
  const [taskPriority, setTaskPriority] = useState('alta')
  const [error, setError] = useState(false)

  useEffect(() => {
    if (Object.keys(taskEditing).length > 0) {
      setTaskName(taskEditing.name)
      setTaskPriority(taskEditing.priority)
    }
  }, [taskEditing])

  const handleSubmit = (e) => {
    e.preventDefault()

    if (taskName.length < 1) {
      setError(true)
      setTimeout(() => {
        setError(false)
      }, 3000)
      return
    }

    if (taskEditing.id) {
      const tmpTasks = tasks.map(task => {
        if (task.id === taskEditing.id) {
          return {
            id: taskEditing.id,
            name: taskName,
            priority: taskPriority
          }
        }
        return task
      })
      setTasks(tmpTasks)
      setTaskEditing({})
    } else {
      const tmpTask = {
        id: Date.now(),
        name: taskName,
        priority: taskPriority
      }

      setTasks([...tasks, tmpTask])
    }

    setTaskName('')
    setTaskPriority('alta')
  }

  return (
    <div className='md:w-1/2 rounded-md m-5'>
      <h1 className='font-black text-center text-xl mb-5'>Agrega tus tareas</h1>
      <form
        className='bg-white shadow-md p-5 rounded-md'
        onSubmit={handleSubmit}
      >
        {error && <Error msj='Es obligatorio agregar una tarea' />}
        <div>
          <label
            htmlFor='task'
            className='block font-semibold text-xl mb-2'
          >Tarea
          </label>
          <textarea
            onChange={e => setTaskName(e.target.value)}
            type='text'
            id='task'
            className='w-full border-2 border-gray-400 rounded p-2'
            placeholder='Escribe tu tarea'
            value={taskName}
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
            value={taskPriority}
          >
            <option value='alta'>Alta</option>
            <option value='media'>Media</option>
            <option value='baja'>Baja</option>
          </select>
        </div>
        <input
          type='submit'
          value={taskEditing.id ? 'Actualizar Tarea' : 'Agregar Tarea'}
          className='bg-green-500 hover:bg-green-700 rounded px-5 py-1 text-white text-xl mt-5 '
        />
      </form>
    </div>
  )
}

export default Form
