import React from 'react'

export default function TaskItem({ task, states, onChange }) {
  return (
    <li className={`task ${task.state.toLowerCase().replace(' ', '-')}`}> 
      <div className="task-card">
        <span className="task-text">{task.text}</span>
        <select value={task.state} onChange={e => onChange(task.id, e.target.value)}>
          {states.map(s => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
      </div>
    </li>
  )
}
