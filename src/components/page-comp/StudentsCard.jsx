import { HiOutlineTrash } from "react-icons/hi"; 
import { BiEditAlt } from "react-icons/bi"; 
import React from 'react'

const StudentsCard = ({item, index}) => {
  return (
    <tr>
      <td>{index + 1}</td>
      <td>
        <div className='flex justify-start gap-2 items-center'>
            <img className='w-[40px] h-[40px] rounded-full object-cover shadow-sm bg-blue-200' src={item.avatar} alt="avatar" />
            <div className='flex justify-center items-center gap-1'>
              <span>{item.firstName}</span>
              <span>{item.lastName}</span>
            </div>
        </div>
      </td>
      <td>
        {item.email}
      </td>
      <td>
        {item.phoneNumber}
      </td>
      <td>
        {item.gender}
      </td>
      <td>
        <div className="flex justify-center items-center gap-2 text-[22px]">
          <button className="text-blue-600 hover:text-blue-700 active:scale-95 hover:scale-110 ">
            <BiEditAlt />
          </button>
          <button className="text-red-600  hover:text-red-700 active:scale-95 hover:scale-110">
            <HiOutlineTrash />
          </button>
        </div>
      </td>
    </tr>
  )
}

export default StudentsCard
