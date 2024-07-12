import React from 'react'
import Header from '../components/Header'
import Content from '../components/Content'
import { Outlet } from 'react-router-dom'
import Sidebar from '../components/Sidebar'

const MainLayout = () => {
  return (
    <div className='flex justify-between gap-[10px] bg-gray-200 h-[100vh] w-full p-[10px]'>
        <div className="min-w-[250px] max-w-[300px] bg-indigo-600 rounded-md p-[10px] text-white">
            <Sidebar/>
        </div>
        <div className="flex-[1]">
            <Header/>
            <Content>
                <Outlet/>
            </Content>
        </div>
    </div>
  )
}

export default MainLayout