import { TbNotesOff } from "react-icons/tb"; 
import { FaLayerGroup } from "react-icons/fa";
import React from 'react'
import SearchInput from "./page-comp/SearchInput";
import { btnData } from "../constants/const";
import { useLocation } from "react-router-dom";

const Header = () => {
    const { pathname } = useLocation()
    const btn = btnData.find(btn => btn.path == pathname) || {icon : TbNotesOff, title : "Oops!"}
    return (
        <div className='bg-indigo-600 rounded-md p-[10px] h-[70px] flex justify-between items-center gap-2 px-[20px] text-white'>
            <h2 className="text-[20px] font-semibold flex justify-start items-center gap-3 flex-1">
                {btn.icon()}
                <span>{btn.title}</span>
            </h2>
            <SearchInput />
        </div>
    )
}

export default Header
