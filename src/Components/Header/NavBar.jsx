import React from 'react'
import SearchBar from './SearchBar'
import LogSign from './LogSign'
import { useHistory } from 'react-router-dom'

import logo from "../../reddit-logo.png"

const NavBar = ({search}) => {
    const history = useHistory();

    const goHome = () => {
        let path = "/";
        history.push(path);
    }


    return (
        <>
            <div className='nav'>
                <a href="/" id="no-underline-pls">
                    <span
                        title="Greenit >:^("
                        className='logo-box'>
                        <img id="greenit-logo" src={logo} alt="Greenit Logo"/> 
                        <h4>Greenit</h4>
                    </span>
                </a>  
                <SearchBar search={search}/>  
                <LogSign /> 
            </div>          
        </>
    )
}

export default NavBar
