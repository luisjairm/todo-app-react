import { useEffect, useState } from 'react'
import Form from './components/Form'
import ListCompletedTasks from './components/ListCompletedTasks'
import ListTasks from './components/ListTasks'

const App = () => {
  const [tasks, setTasks] = useState([])
  const [completedTasks, setCompletedTasks] = useState([])
  const [taskEditing, setTaskEditing] = useState({})

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
  const removeTaskCompleted = (id) => {
    const tmpTasksCompleted = completedTasks.filter(task => task.id !== id)
    setCompletedTasks(tmpTasksCompleted)
  }

  return (
    <div
      className='container mx-auto mt-20'
    >
      <h1 className='text-center font-bold text-4xl'>Todo App
      </h1>
      <div className='md:flex mt-12 flex-col'>
        <div className='w-full md:flex'>
          <Form
            tasks={tasks}
            setTasks={setTasks}
            taskEditing={taskEditing}
            setTaskEditing={setTaskEditing}
          />
          <ListTasks
            tasks={tasks}
            setTasks={setTasks}
            completeTask={completeTask}
            removeTask={removeTask}
            setTaskEditing={setTaskEditing}
          />
        </div>

        <ListCompletedTasks
          completedTasks={completedTasks}
          setCompletedTasks={setCompletedTasks}
          removeTaskCompleted={removeTaskCompleted}
        />
      </div>
    </div>
  )
}

export default App
