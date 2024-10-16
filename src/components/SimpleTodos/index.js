import {Component} from 'react'

import './index.css'

import TodoItem from '../TodoItem/index'

const initialTodosList = [
  {
    id: 1,
    title: 'Book the ticket for today evening',
  },
  {
    id: 2,
    title: 'Rent the movie for tomorrow movie night',
  },
  {
    id: 3,
    title: 'Confirm the slot for the yoga session tomorrow morning',
  },
  {
    id: 4,
    title: 'Drop the parcel at Bloomingdale',
  },
  {
    id: 5,
    title: 'Order fruits on Big Basket',
  },
  {
    id: 6,
    title: 'Fix the production issue',
  },
  {
    id: 7,
    title: 'Confirm my slot for Saturday Night',
  },
  {
    id: 8,
    title: 'Get essentials for Sunday car wash',
  },
]

// Write your code here

// import {Component} from 'react'

// import './index.css'

// import '../TodoItem/index'

class SimpleTodos extends Component {
  state = {todosList: initialTodosList}

  deleteTodo = uniqueNo => {
    const {todosList} = this.state

    const filtertodosList = todosList.filter(
      eachTodo => eachTodo.id !== uniqueNo,
    )

    this.setState({todosList: filtertodosList})
  }

  render() {
    const {todosList} = this.state

    return (
      <div className="app-container">
        <div className="main-container">
          <h1 className="container-heading">Simple Todos</h1>
          <ul className="todos-container">
            {todosList.map(eachTodo => (
              <TodoItem
                key={eachTodo.id}
                todoDetails={eachTodo}
                deleteTodo={this.deleteTodo}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default SimpleTodos
