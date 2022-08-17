import React from 'react'

const Todoinput = ({ addItem }) => {

    const [item, setItem] = React.useState('')

    return (
        <>
            <h1>Todo List using UseEffect and Json Server</h1>
            <h2>Mounting and Updation</h2>
            <input type="text" value={item} onChange={
                (event) => {
                    setItem(event.target.value)
                }
            } />

            <button onClick={
                () => {
                    addItem(item);
                    setItem('')
                }
            }>Save</button>

            {/* <button ></button> */}
        </>
    )
}

export { Todoinput }
