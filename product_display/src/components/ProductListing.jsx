import React, { useEffect } from 'react'
import { useState } from 'react'
// import { useRef } from 'react'

const ProductListing = () => {

    const [data, setData] = useState([])
    const [page, setPage] = useState(1)
    const [loading, setLoader] = useState(false)
    const [error, setError] = useState(false)
    const [sort,setSort] = useState('')
    const [gender,setGender] = useState('')

    // const filterRef = useRef()
    // const sortRef = useRef()

    const getData = (page,sort) => {
        setLoader(true);
        console.log(page,sort,gender)
        fetch(`http://localhost:3001/stock?_page=${page}&_limit=5$_sort=price&_order=${sort}`)
            .then((res) => res.json() )
            .then((res) => setData(res))
            .catch((error) => { setError(true); console.log(error) })
        .finally(()=>{setLoader(false);setError(false)})
        // setLoader(false);setError(false)
    }

    useEffect(() => {
        getData(page,sort)
        // setLoader(false); setError(false)
    }, [page,sort])

    // "title": "test",
    // "gender": "Male",
    // "price": "1",
    // "category": "test",
    // "image": "https://picsum.photos/200",
    // "id": 11

    const handelDelete = (itemId) => {
        fetch(`http://localhost:3001/stock/${itemId}`, {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json"
            }
        }).then(() => getData(page))
    }

    const handelSort = (sort) => {
        setLoader(true);
        fetch(`http://localhost:3001/stock?_sort=price&_order=${sort}&_page=${page}&_limit=5`)
            .then((res) => res.json() )
            .then((res) => setData(res))
            // .then(()=>handelFilter(filterRef))
            .catch((error) => { setError(true); console.log(error) })
        .finally(()=>{setLoader(false);setError(false)})
    }

    const handelFilter = (gender) => {
        setLoader(true);
        fetch(`http://localhost:3001/stock?_page=${page}&_limit=5&gender=${gender}`)
            .then((res) => res.json() )
            .then((res) => setData(res))
            // .then(()=>handelSort(sortRef))
            .catch((error) => { setError(true); console.log(error) })
        .finally(()=>{setLoader(false);setError(false)})
    }



    return (
        <div className='cardDiv' style={{ display: 'flex', flexWrap: 'wrap' }}>
            {

                data.map((el) => {
                    return (
                        <div key={el.id} style={{ margin: 15 }}>
                            <img src={el.image} alt="" />
                            <h1>{el.title}</h1>
                            <h2><span>{el.category} </span> <span>{el.gender}</span></h2>
                            <h2>₹ {el.price}</h2>
                            <button onClick={() => handelDelete(el.id)}>Delete</button>
                        </div>
                    )
                })
            }
            <br />
            <h1>Page : {page}</h1><br />
            <button disabled={page === 1} onClick={() => setPage(page - 1)} style={{ width: 50, height: 50 }}>Prev</button>
            <button onClick={() => setPage(page + 1)} style={{ width: 50, height: 50 }}>Next</button><br />

            <select onChange={(event)=>{setSort(event.target.value);handelSort(sort)}} style={{ width: 150, height: 50 }}>
                <option value=''>Select Range</option>
                <option value='asc' >Low To High</option>
                <option value='desc'>High To Low</option>
            </select><br />
            <select onChange={(event)=>{setGender(event.target.value);handelFilter(gender)}} style={{ width: 150, height: 50 }}>
                <option value=''>Select Gender</option>
                <option value='male'>Male</option>
                <option value='female'>Female</option>
            </select>
        </div>
    )
}

export { ProductListing }