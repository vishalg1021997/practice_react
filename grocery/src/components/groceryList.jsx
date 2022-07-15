import React from 'react'

const GroceryList = ({ data, deleteItem }) => {

    console.log(data)
    return (
        <div>
            {
                data.map((el) =>
                    <div key={el.id}>
                        <h1 >{el.title}</h1>
                        <button onClick={() => deleteItem(el.id)}>Delete</button>
                    </div>
                )
            }
        </div>
    )
}
export { GroceryList }