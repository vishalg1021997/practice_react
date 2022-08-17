import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
const Navbar = () => {

    const Navbar = styled.nav`
        display:flex;
        margin:auto;
        width:450px;
        background-color:cyan;
        height:50px;
        align-items:center;
        justify-content:space-around;
        margin-bottom:20px;
    `;

  return (
    // <div>Navbar</div>
    <Navbar>
        <Link to={'/'}>Home</Link>
        <Link to={'/allproducts'}>AllProducts</Link>
    </Navbar>
  )
}

export {Navbar}