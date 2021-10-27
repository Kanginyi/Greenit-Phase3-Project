import React from 'react'
import SearchBar from './SearchBar'
import User from './User'

import logo from "../../reddit-logo.png"

const NavBar = () => {
    return (
        <>
            <div className='nav'>
                <span className='logo-box'>
                    <img id="greenit-logo" src={logo} alt="Greenit Logo" title="Greenit >:^("/> 
                    <h4>Greenit</h4>
                </span>     
                <SearchBar />  
                <User /> 
            </div>          
        </>
    )
}

export default NavBar
