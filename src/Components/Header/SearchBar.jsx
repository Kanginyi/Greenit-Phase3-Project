import React from 'react'


const SearchBar = ({search}) => {
    return (
        <form className="searchbar">     
        <input
            onChange={search}
            type="text"
            placeholder="Search Greenit"
        />
        {/* <button type="submit">Search</button> */}
    </form>
    )
}

export default SearchBar
