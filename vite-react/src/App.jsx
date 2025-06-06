import { useEffect, useState } from 'react'
import AppWrapper from './AppWrapper.jsx'
import TaskItem from './TaskItem.jsx'
import './App.css'

const STATES = ['Pendiente', 'In Progress', 'Completada']

export default function App() {
  const [tasks, setTasks] = useState(() => {
    const data = localStorage.getItem('tasks')
    return data ? JSON.parse(data) : []
  })
  const [text, setText] = useState('')

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

  function addTask(e) {
    e.preventDefault()
    if (!text.trim()) return
    const newTask = {
      id: Date.now(),
      text: text.trim(),
      state: 'Pendiente',
    }
    setTasks((t) => [...t, newTask])
    setText('')
  }

  function updateTask(id, state) {
    setTasks((ts) => ts.map((t) => (t.id === id ? { ...t, state } : t)))
  }

  return (
    <AppWrapper>
      <div className="container">
        <h1>TODO List</h1>
        <form onSubmit={addTask} className="add-form">
          <input
            placeholder="Nueva tarea"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button>Añadir</button>
        </form>
      <ul className="task-list">
        {tasks.map((task) => (
          <TaskItem key={task.id} task={task} states={STATES} onChange={updateTask} />
        ))}
      </ul>
      </div>
    </AppWrapper>
  )
}
