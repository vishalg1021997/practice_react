import React from 'react'

const Todolist = ({ data }) => {

    console.log(data)

    return (
        <div>
            {
                data.map((el) =>
                    <h1 key={el.id}>{el.title}</h1>
                )
            }
        </div>
    )
}

export { Todolist }
