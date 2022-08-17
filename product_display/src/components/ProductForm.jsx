import React from 'react'
import { ProductListing } from './ProductListing'

const ProductForm = () => {

    const [formData, setFormData] = React.useState({
        title: "",
        gender: "",
        price: "",
        category: "",
        image: ""
    })

    const { title, gender, price, category, image } = formData

    const handelChange = (event) => {
        const { name, value } = event.target

        setFormData({ ...formData, [name]: value })
    }

    const handelSubmit = (event) => {
        event.preventDefault()
        console.log(formData)
        fetch(`http://localhost:3001/stock`, {
            method: 'POST',
            body: JSON.stringify(formData),
            headers: {
                "Content-Type": "application/json"
            }
        }).catch((error) => console.log(error))
       
    }

    return (
        <div>
            <form onSubmit={handelSubmit}>
                <input type="text" value={title} name='title' onChange={handelChange} placeholder="Enter Product Title" /><br /><br />
                <select name="gender" value={gender} onChange={handelChange}>
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                </select><br /><br />
                <input type="text" value={price} name='price' onChange={handelChange} placeholder="Enter Product Price" /><br /><br />
                <input type="text" value={category} name='category' onChange={handelChange} placeholder="Enter Product Category" /><br /><br />
                <input type="text" value={image} name='image' onChange={handelChange} placeholder="Enter Product Image Link" /><br /><br />
                <input type="submit" value='SUBMIT' />
            </form>
        </div>
    )
}

export { ProductForm }