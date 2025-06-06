export default function TaskItem({ task, states, onChange }) {
  const isCompleted = task.state === 'Completada'
  const stateClass = task.state.toLowerCase().replace(' ', '-')
  return (
    <li className="task-item">
      <div className={`task-card ${stateClass} ${isCompleted ? 'completed' : ''}`}>
        <span>{task.text}</span>
        <select value={task.state} onChange={(e) => onChange(task.id, e.target.value)}>
          {states.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </div>
    </li>
  )
}
