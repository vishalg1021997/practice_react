import React from 'react'

const Employeelist = ({ data }) => {
    return (
        <div className='list'>Employeelist
            <table>

                {
                    data.map((el) => {
                        return (
                            <tbody key={el.id}>
                                <tr>
                                    <td>{el.id}</td>
                                    <td>{el.emp_name}</td>
                                    <td>{el.emp_age}</td>
                                    <td>{el.emp_address}</td>
                                    <td>{el.emp_department}</td>
                                    <td>{el.emp_salary}</td>
                                    <td>{el.emp_maritalstate}</td>
                                </tr>
                            </tbody>)
                    })
                }
            </table>
        </div>
    )
}

export { Employeelist }
