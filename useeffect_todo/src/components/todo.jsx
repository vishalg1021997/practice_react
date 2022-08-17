import React from 'react'
import { Todoinput } from './todoinput'
import { Todolist } from './todolist'
import { v4 as uuidv4 } from 'uuid';

const Todo = () => {

    const [data, setData] = React.useState([])
    const [loading, setLoading] = React.useState(false)
    const [error, setError] = React.useState(false)
    const [page,setPage] = React.useState(1)

    const getlist = async (page) => {                    //To Retrive data From Json Server 
        setLoading(true)
        try {
            let res = await fetch(`http://localhost:3001/todo?_page=${page}&_limit=3`)
            setData(await res.json())
        } catch (error) {
            console.log(error)
            setError(true)
        } finally {
            setLoading(false)
            setError(false)
        }
    }



    React.useEffect(() => {                 //To Load the Todo Components as the user lands on the page
        getlist(page)
    }, [page])



    const addItem = (item) => {            //To add the Data in Json Server
        const temp = {
            title: item,
            status: false,
            id: uuidv4()
        }
        // setData([...data,temp])
        try {
            (
                async () => {
                    let res = await fetch(`http://localhost:3001/todo`, {
                        method: 'POST',
                        body: JSON.stringify(temp),
                        headers: {
                            "Content-Type": "application/json"
                        }
                    })
                    // setData([...data,await res.json()])
                    getlist()
                }
            )()
        } catch (error) {
            console.log(error)
        }

    }

    return loading ? <h1>Loading...... Please Wait</h1> : error ? <h1>Error Found</h1> : (
        <>
            <Todoinput addItem={addItem}/>
            <Todolist data={data} />
            <h2>Page {page}</h2>
            <button disabled={page===1} onClick={() => {setPage(page - 1)}}>Prev</button>
            <button onClick={() => {setPage(page + 1)}}>Next</button>
            
        </>
    )
}

export { Todo }
