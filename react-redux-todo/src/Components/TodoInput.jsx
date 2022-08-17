import React from 'react'
import { useDispatch} from 'react-redux'
import {v4 as uuidv4} from 'uuid';
import { addItem } from '../Redux/action';
// {handelClick}
const TodoInput = () => {

    const [inputValue,setInputValue] = React.useState('')

    const dispatch = useDispatch()

    const handelClick = () => {
        const temp = {
            id:uuidv4(),
            title: inputValue,
            status:false
        }
        dispatch(addItem(temp))
    }

  return (
    <div>
        <input type="text" value={inputValue} placeholder='Enter Task' onChange={(event) => setInputValue(event.target.value)}/>
        {/* <input type="text" placeholder='Enter Task' /> */}
        <button onClick={handelClick}>ADD TASK</button>
        {/* onClick={handelClick(inputValue)} */}
    </div>
  )
}

export default TodoInput