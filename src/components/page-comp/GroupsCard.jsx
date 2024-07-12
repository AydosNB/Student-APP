import { FaTrash } from "react-icons/fa"; 
import { AiFillEdit } from "react-icons/ai"; 
import React from 'react'

const GroupsCard = ({ item, index, sendItemId }) => {
    return (
        <div className='p-[10px] rounded-md bg-gray-800 text-white font-medium text-[18px] flex justify-between items-center gap-2'>
            <div className='flex justify-start items-center gap-2'>
                <div className='w-[30px] h-[30x] rounded-sm bg-white text-gray-700 flex justify-center items-center'>
                    {index + 1}
                </div>
                <span>{item.groupName}</span>
            </div>
            <div className="flex justify-end items-center gap-2">
                <button onClick={() => sendItemId(item.id, "update")} className="h-[30px] w-[30px] flex justify-center items-center text-[18px] bg-blue-600 rounded-sm hover:bg-blue-700 active:scale-95">
                    <AiFillEdit />
                </button>
                <button onClick={() => sendItemId(item.id, "delete")} className="h-[30px] w-[30px] flex justify-center items-center text-[18px] bg-red-600 rounded-sm hover:bg-red-700 active:scale-95">
                    <FaTrash />
                </button>
            </div>
        </div>
    )
}

export default GroupsCard
