import React from 'react'

const GroceryInput = ({AddItem}) => {

    const [InputItem,setInputItem] = React.useState('')

  return (
    <div>
        <input type="text" value={InputItem} onChange={(event) => {setInputItem(event.target.value)}}/>
        <button onClick={() => {AddItem(InputItem);setInputItem('')}}>Add Item</button>
    </div>
  )
}


export {GroceryInput}