import React from 'react'

export default function NewTaskForm({ text, onChange, onAdd }) {
  return (
    <form onSubmit={onAdd} className="add-form">
      <input
        className="task-input"
        placeholder="Nueva tarea"
        value={text}
        onChange={(e) => onChange(e.target.value)}
      />
      <button className="add-button">Añadir</button>
    </form>
  )
}
