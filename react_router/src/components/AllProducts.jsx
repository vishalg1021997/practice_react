import React from 'react'
import { Link } from 'react-router-dom'

 const AllProducts = () => {

    const [data,setData] = React.useState([])

    const getdata = () => {
        fetch(`http://localhost:3001/products`)
        .then((res) => res.json())
        .then((res) => setData(res))
        .catch((error) => console.log(error))
    }

    React.useEffect(() => {
        getdata()
    },[])

  return (
    <div style={{margin:'auto',width:400}}>AllProducts
        <table>
        <thead>
            <tr>
              <th>Product Name</th>
              <th>Price</th>
              <th>More Details</th>
            </tr>
          </thead>
          <tbody>
        
        {
            data.map((el) => (
                <tr key={el.id}>
                    <td>{el.name}</td>
                    <td>{el.price}</td>
                    <td>{<Link to={`/productdetails/:${el.id}`}>More Details....</Link>}</td>
                </tr>
            ))
        }
        </tbody>
        </table>
        
    </div>
  )
}

export {AllProducts}