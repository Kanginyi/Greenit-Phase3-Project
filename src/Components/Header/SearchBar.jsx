import React from 'react'


const SearchBar = () => {
    return (
        <form className="searchbar">     
        <input
            type="text"
            placeholder="search posts"
        />
        <button type="submit">Search</button>
    </form>
    )
}

export default SearchBar
