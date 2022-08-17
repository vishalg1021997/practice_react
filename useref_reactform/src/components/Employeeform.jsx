import React from 'react'
import { Employeelist } from './Employeelist'

const Employeeform = () => {

    const [data, setData] = React.useState([])

    const [formData, setformData] = React.useState({
        emp_name: '',
        emp_age: '',
        emp_address: '',
        emp_department: '',
        emp_salary: '',
        emp_maritalstate: false
    })

    const { emp_name, emp_age, emp_address, emp_department, emp_salary, emp_maritalstate } = formData

    const getdata = () => {
        fetch(`http://localhost:3001/employee`)
            .then((res) => res.json())
            .then((res) => setData(res))
            .catch((error) => console.log(error))
        //console.log(data)
    }

    React.useEffect(() => {
        getdata()
    }, [])

    const handelchange = (event) => {
        let { name, value, checked, type } = event.target

        value = type === 'checkbox' ? checked : value

        // value = value === '' & name === 'emp_department' ? 'Web Development' : value

        setformData({ ...formData, [name]: value })
    }
    // console.log(formData)

    const handelsubmit = (event) => {
        event.preventDefault()
        // console.log(formData)
        fetch(`http://localhost:3001/employee`, {
            method: 'POST',
            body: JSON.stringify(formData),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(() => getdata())
    }

    // console.log(data)

    return (
        <div className='form'>
            <form onSubmit={handelsubmit}>
                <label>
                    Name: <input type="text"
                        placeholder='Employee Name'
                        name='emp_name'
                        value={emp_name}
                        onChange={handelchange} />
                </label><br /><br />
                <label>
                    Age: <input type="text"
                        placeholder='Employee age'
                        name='emp_age'
                        value={emp_age}
                        onChange={handelchange} />
                </label><br /><br />
                <label>
                    Address: <input type="text"
                        placeholder='Employee address'
                        name='emp_address'
                        value={emp_address}
                        onChange={handelchange} />
                </label><br /><br />
                <label>
                    Department: <select name="emp_department" value={emp_department} onChange={handelchange}>
                        <option value="">Select Option</option>
                        <option value="Web Development">Web Development</option>
                        <option value="Android Development">Android Development</option>
                        <option value="Data Science">Data Science</option>
                    </select>
                </label><br /><br />
                <label>
                    Salary: <input type="text"
                        placeholder='Employee salary'
                        name='emp_salary'
                        value={emp_salary}
                        onChange={handelchange} />
                </label><br /><br />
                <label>
                    Maritalstate: <input type="checkbox"
                        name='emp_maritalstate'
                        onChange={handelchange} />
                </label><br /><br />
                <input type="submit" value="SUBMIT FORM" />
            </form>

            <Employeelist data={data} />
        </div>
    )
}

export { Employeeform }
