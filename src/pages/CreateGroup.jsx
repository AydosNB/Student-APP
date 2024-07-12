import { CgSpinner } from "react-icons/cg";
import React, { useEffect, useRef } from 'react'
import { useFetch } from '../hooks/useFetch'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CreateGroup = () => {
  const url = "http://localhost:3000/groups"
  const inputValue = useRef()
  const errorMes = useRef()
  const groupForm = useRef()
  const { postLoading, postError, postDataAxios } = useFetch()

  function handleSubmit(e) {
    e.preventDefault()
    const value = inputValue.current.value
    if (value.trim().length > 0) {
      const bodyData = {
        groupName: value
      }
      postDataAxios(url, bodyData)
      groupForm.current.reset()
      errorMes.current.textContent = ""
      if (postError === null) {
        toast.success("Information sent successfully", {
          position: "bottom-right",
          theme: "colored"
        })
      } else {
        toast.error("There was an error sending data", {
          position: "bottom-right",
          theme: "colored"
        })
      }
    } else {
      inputValue.current.focus()
      errorMes.current.textContent = "Mag'liwmat kiritin'"
      setTimeout(() => { errorMes.current.textContent = "" }, 3000)
    }
  }

  return (
    <div>
      <form className='w-full flex flex-col gap-2' onSubmit={(e) => handleSubmit(e)} ref={groupForm}>
        <label htmlFor="group-name" className='flex flex-col gap-1'>
          <span className='font-semibold'>Group name:</span>
          <input ref={inputValue} className='form-input' type="text" placeholder='Enter the group name' id='group-name' />
          <span ref={errorMes} className='text-red-500 text-[12px]'>

          </span>
        </label>
        <div className='flex justify-end'>
          <button className='btn btn-solid max-w-max'>
            {postLoading ?
              <span className="flex justify-center gap-1 items-center">
                <div className="animate-spin">
                  <CgSpinner />
                </div>Send...
              </span>
              :
              <span>Send</span>}
          </button>
        </div>
      </form>
      <ToastContainer />
    </div>
  )
}

export default CreateGroup
