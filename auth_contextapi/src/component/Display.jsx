import React from 'react'
import { AuthContext } from '../context/AuthContext';
 const Display = () => {

    const {flag,token} = React.useContext(AuthContext)

  return (
    <div style={{margin:'30px',fontSize:'20px',textAlign:'center'}}>
        {
            flag ? <><h1>User Login</h1> <h1>Token is  {token}</h1> </>: <h1>User Not Login</h1>
        }
    </div>
  )
}

export {Display}
