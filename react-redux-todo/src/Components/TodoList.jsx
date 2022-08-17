import React from 'react'
import { useDispatch } from 'react-redux'
import { removeItem } from '../Redux/action'

const TodoList = ({todo}) => {

  const dispatch = useDispatch()

  const handelRemove = (id) => {
    dispatch(removeItem(id))
  }

  return (
    <div>
      {
        todo.map((el) => 
          <h1 key={el.id}>{el.title} <button onClick={() => {handelRemove(el.id)}}>Remove</button></h1>
        )
      }
    </div>
  )
}

export default TodoList