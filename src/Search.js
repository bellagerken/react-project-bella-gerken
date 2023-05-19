import React from "react"

function Search({updateSearch, searchText}){
    return(
        <div className="search">
            <h4>Search food category or dish name (breakfast, dinner, snacks, or dessert)</h4>
            <input onChange={updateSearch} value={searchText}type="text" className="searchTerm" />
        </div>
    )
}

export default Search