import React from 'react'
import "./searchbar.css"
import { BsSearch } from 'react-icons/bs';


export const SearchBar = () => {
    return (
        <div class="wrap">
            <div class="search">
                <input type="text" class="searchTerm" placeholder="....ابحث هنا " />
                <button type="submit" class="searchButton">
                    <BsSearch />
                </button>
            </div>
        </div>



    )
}
