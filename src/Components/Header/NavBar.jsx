import React from 'react'
import SearchBar from './SearchBar'
import User from './User'

const NavBar = () => {
    return (
        <>
            <div className='nav sticky'>
                <span className='logo-box'>
                    <h4>Greenit</h4>
                </span>     
                <SearchBar />  
                <User /> 
            </div>          
        </>
    )
}

export default NavBar
