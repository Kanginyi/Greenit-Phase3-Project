import React from 'react'
import SearchBar from './SearchBar'
import User from './User'
import { useHistory, Link } from 'react-router-dom'

import logo from "../../reddit-logo.png"

const NavBar = () => {
    const history = useHistory();

    const goHome = () => {
        let path = "/";
        history.push(path);
    }


    return (
        <>
            <div className='nav'>
                <span title="Greenit >:^(" className='logo-box' onClick={goHome}>
                    <img id="greenit-logo" src={logo} alt="Greenit Logo"/> 
                    <h4>Greenit</h4>
                </span>     
                <SearchBar />  
                <User /> 
            </div>          
        </>
    )
}

export default NavBar
