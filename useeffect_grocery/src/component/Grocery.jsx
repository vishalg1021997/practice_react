import React from 'react'
import { GroceryInput } from './GroceryInput'
import { GroceryList } from './GroceryList'

const Grocery = () => {

   const [data,setData] = React.useState([])

    const GetList = () => {
        fetch('http://localhost:3001/item')
        .then((res)=>res.json())
        .then((res)=>{setData(res)})
        .catch((error=>console.log(error)))
    }

    React.useEffect(()=>{
        GetList()
    },[])

   const AddItem = (item) => {
    let temp = {
        title:item
    }

    fetch('http://localhost:3001/item',{
        method:'POST',
        body: JSON.stringify(temp),
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(()=>GetList())
    .catch((error)=>console.log(error))
    

    // setData([...data,temp])
    // console.log(data)
   }

   const DeleteItem = (ItemId) => {
    // let temp = data.filter((el)=>{return el.id != ItemId})   
    // setData(temp)
    fetch(`http://localhost:3001/item/${ItemId}`,{
        method:'DELETE',
        headers:{
            "Content-Type": "application/json"
        }
    }).then(() => GetList())
   }

  return (
    <div>
        <GroceryInput AddItem={AddItem}/>
        <GroceryList data={data} DeleteItem={DeleteItem}/>
    </div>
  )
}

export {Grocery}
