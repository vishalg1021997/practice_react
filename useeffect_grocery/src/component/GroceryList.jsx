import React from 'react'

const GroceryList = ({data,DeleteItem}) => {

    return (
        <div>
            {
                data.map((el) => {
                    return <h1 key={el.id}>{el.title} 
                                <button onClick={() => {DeleteItem(el.id)}}>Delete</button>
                            </h1>
                })
            }
        </div>
    )
}

export { GroceryList }