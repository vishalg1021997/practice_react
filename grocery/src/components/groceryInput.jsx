import React from 'react';

const GroceryInput = ({ additem }) => {
    const [item, setItem] = React.useState('');
    return (
        <div>
            <h1>Grocery List</h1>
            <input type="text" value={item} onChange={
                (event) => {
                    setItem(event.target.value)
                }
            } />

            <button onClick={
                () => {
                    additem(item)
                    setItem('')
                }
            }>Add Item</button>
        </div>
    )
}

export { GroceryInput }
