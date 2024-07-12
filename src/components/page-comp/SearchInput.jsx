import { BiSearch } from "react-icons/bi"; 
import React from 'react'

const SearchInput = () => {
  return (
    <form className="flex-1 relative">
        <input type="text" placeholder='Enter the name' className="outline-none border-[1px] w-full border-indigo-700 py-[6px] px-[35px] rounded-full text-gray-800"/>
        <div className="absolute left-[7px] top-[2px] py-[6px] text-gray-700 text-[20px]">
            <BiSearch />
        </div>
        <button className="absolute top-[2px] right-[2px] py-[4.6px] px-[10px] bg-indigo-600 rounded-full">
            Search
        </button>
    </form>
  )
}

export default SearchInput
