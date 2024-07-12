import React, { useRef, useState } from 'react'
import { useFetch } from '../hooks/useFetch'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import StudentFormInput from "../components/page-comp/StudentFormInput";

const CreateStudent = () => {
  const url = "http://localhost:3000/students"
  const groupUrl = "http://localhost:3000/groups"
  const studentForm = useRef()
  const { data, postError, posData, postLoading, postDataAxios} = useFetch(groupUrl)
  const [bodyData, setBodyData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    gender: "",
    avatar: "",
    groupId: ""
  })

  function handleSubmit(e) {
    e.preventDefault()
    postDataAxios(url, bodyData)
    studentForm.current.reset()
    setBodyData(
      {
        firstName: "",
        lastName: "",
        phoneNumber: "",
        email: "",
        gender: "",
        avatar: "",
        groupId: ""
      }
    )
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
  }


  return (
    <div>
      <StudentFormInput data={data} bodyData={bodyData} setBodyData={setBodyData} handleSubmit={handleSubmit} studentForm={studentForm}/>
      <ToastContainer />
    </div>
  )
}

export default CreateStudent
