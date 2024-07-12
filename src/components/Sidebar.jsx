import { GiBookCover } from "react-icons/gi";
import React, { Fragment, useState } from 'react'
import { btnData } from "../constants/const";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
    const {pathname} = useLocation()
    return (
        <div>
            <h2 className='flex justify-center items-center py-[10px] text-[22px] gap-2 font-semibold border-b-[1px] border-white'>
                <GiBookCover />
                <span>Student App</span>
            </h2>
            <div className="flex flex-col gap-2 mt-[15px]">
                <span>Dashboard</span>
                {btnData.map(btn => (
                    <Fragment key={btn.id}>  
                        {btn.id == 3&& <>
                        <span>Create</span>
                        <hr />
                        </>}
                        <Link to={btn.path}>
                            <button className={`btn btn-solid ${btn.path === pathname&& "active"}`}>
                                <div>
                                    {btn.icon()}
                                </div>
                                <span>{btn.title}</span>
                            </button>
                        </Link>
                    </Fragment>
                ))}
            </div>
        </div>
    )
}

export default Sidebar
