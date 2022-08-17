import React from 'react'
import {Input,Button, ButtonGroup} from '@chakra-ui/react';
import { AuthContext } from '../context/AuthContext';

 const Navbar = () => {

    const [username,setUsername] = React.useState('')
    const [password,setPassword] = React.useState('')

    const {isAuth,toggleAuth,flag,toggel} = React.useContext(AuthContext)
    

    const handelClick = () => {

        if(flag){
            isAuth(false,'')
            toggleAuth()
            return
        }

        const temp = {
            email:username,
            password:password
        }

        let data

        fetch(`https://reqres.in/api/login`,{
            method:"POST",
            body:JSON.stringify(temp),
            headers:{
                "Content-Type": "application/json"
            }
        }).then((res) => res.json())
        .then((res) => data = res)
        
        setTimeout(()=>{
            // console.log(data.token? true:false,'data')
            
            // data.token ? isAuth(true,data.token):isAuth(false,'')
            if(data.token){
                isAuth(data.token)
                toggleAuth()
            }
            

        },1000)
        
    }


  return (
    <nav style={{backgroundColor:'grey', height:"60px",display:'flex',gap:'30px',padding:'10px 30px',justifyContent:'right'}}>
        {flag ? <Button colorScheme='blue' onClick={handelClick}>Log Out</Button> : <><Input variant='filled' placeholder='Enter Username' width={250} value={username} onChange={(event) => setUsername(event.target.value)}/>
        <Input variant='filled' placeholder='Enter Password' width={250} value={password} onChange={(event) => setPassword(event.target.value)}/>
        <Button colorScheme='blue' onClick={handelClick}>Login</Button></>}
    </nav>
  )
}

export {Navbar}
