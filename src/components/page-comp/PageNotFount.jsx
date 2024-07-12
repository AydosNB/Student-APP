import React from 'react'
import { Link } from 'react-router-dom'

const PageNotFount = () => {
    return (
        <div className='flex flex-col gap-2 justify-center items-center h-[60vh]'>
            <h2 className='text-[50px] font-bold text-gray-600'>404</h2>
            <span className='text-[20px] font-bold text-gray-800'>Page not fount</span>
            <p>Oops!. The page you entered does not exist</p>
            <Link to={"/"}>
                <button className='btn btn-solid'>
                    Home page
                </button>
            </Link>
        </div>
    )
}

export default PageNotFount
