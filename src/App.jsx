import { useEffect, useState } from 'react'
import Form from './components/Form'
import ListCompletedTasks from './components/ListCompletedTasks'
import ListTasks from './components/ListTasks'

const App = () => {
  const [tasks, setTasks] = useState([])
  const [completedTasks, setCompletedTasks] = useState([])

  useEffect(() => {
    console.log('tasks ', tasks)
    console.log('completed tasks ', completedTasks)
  }, [tasks])

  const completeTask = (id) => {
    const tmpTasks = tasks.filter(task => task.id !== id)
    const tmpCompleteTask = tasks.filter(task => task.id === id)

    setTasks(tmpTasks)
    setCompletedTasks([...completedTasks, tmpCompleteTask[0]])
  }

  const removeTask = (id) => {
    const tmpTasks = tasks.filter(task => task.id !== id)
    setTasks(tmpTasks)
  }

  return (
    <div
      className='container mx-auto mt-20'
    >
      <h1
        className='text-center font-bold text-4xl'
      >Todo App
      </h1>
      <div
        className='md:flex mt-12'
      >
        <div
          className='md:w-1/2 m-5'
        >
          <Form
            tasks={tasks}
            setTasks={setTasks}
          />
          <ListCompletedTasks
            completedTasks={completedTasks}
            setCompletedTasks={setCompletedTasks}
          />
        </div>
        <ListTasks
          tasks={tasks}
          setTasks={setTasks}
          completeTask={completeTask}
          removeTask={removeTask}
        />
      </div>
    </div>
  )
}

export default App
