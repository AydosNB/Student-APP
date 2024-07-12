import React from 'react'

const GroupsCardScleton = () => {
    return (
        <div className='p-[10px] rounded-md bg-gray-500 text-white font-medium text-[18px] flex justify-between items-center gap-2'>
            <div className='flex justify-start items-center gap-2 flex-1'>
                <div className='min-w-[30px] animate-pulse min-h-[30px] rounded-sm bg-gray-200 text-gray-700 flex justify-center items-center'>
                    
                </div>
                <span className='min-w-[50%] animate-pulse h-[15px] rounded-sm bg-gray-400'></span>
            </div>
            <div className="flex justify-end items-center gap-2">
                <button className="h-[30px] animate-pulse w-[30px] flex justify-center items-center text-[18px] bg-gray-400">
                    
                </button>
                <button className="h-[30px] animate-pulse w-[30px] flex justify-center items-center text-[18px] bg-gray-400">
                    
                </button>
            </div>
        </div>
    )
}

export default GroupsCardScleton
