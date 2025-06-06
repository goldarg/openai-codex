import { useEffect, useState } from 'react'
import AppWrapper from './AppWrapper.jsx'
import NewTaskForm from './NewTaskForm.jsx'
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
        <NewTaskForm
          text={text}
          onChange={setText}
          onAdd={addTask}
        />
        <ul className="task-list">
        {tasks.map((task) => (
          <li key={task.id} className={`task ${task.state.toLowerCase().replace(' ', '-')}`}>
            <span>{task.text}</span>
            <select
              value={task.state}
              onChange={(e) => updateTask(task.id, e.target.value)}
            >
              {STATES.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </li>
        ))}
      </ul>
      </div>
    </AppWrapper>
  )
}
