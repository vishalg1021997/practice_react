import React from 'react'
import { v4 as uuidv4 } from 'uuid';
import { GroceryInput } from './groceryInput';
import { GroceryList } from './groceryList';

const Grocery = () => {
    const [data, setData] = React.useState([])

    const additem = (item) => {
        const temp = {
            id: uuidv4(),
            title: item
        }
        setData([...data, temp])
        // console.log(data)
    }

    const deleteItem = (itemID) => {
        const temp = data.filter((el) => el.id !== itemID )
        setData(temp)
    }

    return (
        <>
            <GroceryInput additem={additem} />
            <GroceryList data={data} deleteItem={ deleteItem }/>
            {/* deleteItem={ deleteItem } */}
        </>
    )
}

export { Grocery }
