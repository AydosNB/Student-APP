import React, { useRef, useState } from 'react'
import { useFetch } from '../hooks/useFetch'
import GroupsCard from '../components/page-comp/GroupsCard'
import GroupsCardScleton from '../components/page-comp/GroupsCardScleton'
import ModalAlert from '../components/page-comp/ModalAlert'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { CgSpinner } from 'react-icons/cg'

const Groups = () => {
    const url = "http://localhost:3000/groups"
    const inputValue = useRef()
    const errorMes = useRef()
    const groupForm = useRef()
    const { data, loading, getData, updateError, updateLoading, updateDataAxios, deleteError, deleteLoading, deleteDataAxios } = useFetch(url)

    const [itemId, setItemId] = useState(null)
    const [showModal, setShowModal] = useState(false)
    const [modalType, setModalType] = useState(null)

    function sendItemId(id, type) {
        setItemId(id)
        setModalType(type)
        setShowModal(true)
    }

    function handleDelete(id) {
        deleteDataAxios(url, id).then(() => getData(url))
        setShowModal(false)
        if (deleteError === null) {
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

    function handleSubmit(e) {
        e.preventDefault()
        const value = inputValue.current.value
        if (value.trim().length > 0) {
            const bodyData = {
                groupName: value
            }
            updateDataAxios(url, bodyData, itemId).then(() => {
                console.log("Hello")
                getData(url)
            })
            setShowModal(false)
            groupForm.current.reset()
            errorMes.current.textContent = ""
            if (updateError === null) {
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
        <>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[10px]'>
                {loading ?
                    [0, 1, 2, 4].map(item => (
                        <GroupsCardScleton key={item} />
                    ))
                    :
                    data.map((item, index) => (
                        <GroupsCard item={item} index={index} key={item.id} sendItemId={sendItemId} />
                    ))
                }
            </div>
            {showModal &&
                <ModalAlert setShowModal={setShowModal}>
                    {
                        modalType === "update" &&
                        <form className='w-full flex flex-col gap-2' onSubmit={(e) => handleSubmit(e)} ref={groupForm}>
                            <label htmlFor="group-name" className='flex flex-col gap-1'>
                                <span className='font-semibold'>Group name:</span>
                                <input defaultValue={data.find(item => item.id === itemId).groupName} ref={inputValue} className='form-input' type="text" placeholder='Enter the group name' id='group-name' />
                                <span ref={errorMes} className='text-red-500 text-[12px]'>

                                </span>
                            </label>
                            <div className='flex justify-end'>
                                <button className='btn btn-solid max-w-max'>
                                    {updateLoading ?
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
                    }
                    {modalType === "delete" &&
                        <div>
                            <h2 className='text-[20px] font-semibold'>Delete group:</h2>
                            <p className='my-[10px]'>Are you sure you want to delete this group?</p>
                            <div className='flex justify-end items-center gap-2'>
                                <button onClick={() => setShowModal(false)} className='btn btn-solid max-w-max'>
                                    Cancel
                                </button>
                                <button onClick={() => handleDelete(itemId)} className='btn btn-solid max-w-max bg-red-500 border-red-600'>
                                    Delete
                                </button>
                            </div>
                        </div>
                    }
                </ModalAlert>}
                <ToastContainer/>
        </>
    )
}

export default Groups
