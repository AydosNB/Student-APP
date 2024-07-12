import React from 'react'

const ModalAlert = ({children, setShowModal}) => {
  return (
    <div onClick={(e) => {
        if(e.target.classList.contains("overlay")) {
            setShowModal(false)
        }
    }} className='overlay fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-55 backdrop-blur-[3px] flex justify-center items-start p-[30px]'>
      <div className='min-w-[350px] p-[15px] rounded-md bg-white'>
        {children}
      </div>
    </div>
  )
}

export default ModalAlert
