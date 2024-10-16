// Write your code here
import './index.css'

const TodoItem = props => {
  const {todoDetails, deleteTodo} = props

  const {id} = todoDetails

  const onDelete = () => {
    deleteTodo(id)
  }

  return (
    <li className="todo-container mb-5" k>
      <p className="todo-title mr-5">{todoDetails.title}</p>
      <button className="delete-button ml-4" onClick={onDelete}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
