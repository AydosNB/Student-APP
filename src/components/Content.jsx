import React from 'react'

const Content = ({children}) => {
  return (
    <div className='bg-white p-[10px] rounded-md my-[10px] min-h-[calc(100vh-100px)] max-h-[calc(100vh-100px)] overflow-y-auto'>
      {children}
    </div>
  )
}

export default Content
