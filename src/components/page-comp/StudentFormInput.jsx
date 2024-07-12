import React from 'react'
import { CgSpinner } from 'react-icons/cg'
import { CiImageOff } from 'react-icons/ci'

const StudentFormInput = ({data, bodyData, setBodyData, handleSubmit, studentForm}) => {
    return (
        <>
            <div className="flex justify-center items-center">
                <div className="border-[1px] border-gray-600 rounded-md w-[350px] h-[230px] relative">
                    <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center text-[30px] bg-gray-100 rounded-md">
                        <CiImageOff />
                    </div>
                    {bodyData.avatar && <img className="rounded-md bg-transparent w-full h-full object-cover relative z-[1]" src={bodyData?.avatar} />}
                </div>
            </div>
            <form className='w-full flex flex-col gap-2' onSubmit={(e) => handleSubmit(e)} ref={studentForm}>
                <label htmlFor="image-url" className='flex flex-col gap-1'>
                    <span className='font-semibold'>Image url:</span>
                    <input required onChange={(e) => setBodyData((prev) => {
                        return {
                            ...prev,
                            avatar: e.target.value.trim()
                        }
                    })} className='form-input' type="text" placeholder='Enter the group name' id='image-url' />
                </label>
                <label htmlFor="first-name" className='flex flex-col gap-1'>
                    <span className='font-semibold'>First name:</span>
                    <input required onChange={(e) => setBodyData((prev) => {
                        return {
                            ...prev,
                            firstName: e.target.value.trim()
                        }
                    })} className='form-input' type="text" placeholder='Enter the group name' id='first-name' />
                </label>
                <label htmlFor="last-name" className='flex flex-col gap-1'>
                    <span className='font-semibold'>Last name:</span>
                    <input required onChange={(e) => setBodyData((prev) => {
                        return {
                            ...prev,
                            lastName: e.target.value.trim()
                        }
                    })} className='form-input' type="text" placeholder='Enter the group name' id='last-name' />
                </label>
                <label htmlFor="email" className='flex flex-col gap-1'>
                    <span className='font-semibold'>Email:</span>
                    <input required onChange={(e) => setBodyData((prev) => {
                        return {
                            ...prev,
                            email: e.target.value.trim()
                        }
                    })} className='form-input' type="email" placeholder='Enter the group name' id='email' />
                </label>
                <label htmlFor="phone-number" className='flex flex-col gap-1'>
                    <span className='font-semibold'>Phone number:</span>
                    <input required onChange={(e) => setBodyData((prev) => {
                        return {
                            ...prev,
                            phoneNumber: e.target.value.trim()
                        }
                    })} className='form-input' type="number" placeholder='Enter the group name' id='phone-number' />
                </label>
                <div>
                    <span className='font-semibold'>Gender:</span>
                    <div className='flex justify-start items-center gap-3'>
                        <label className='flex justify-start items-center gap-1' htmlFor="male">
                            <span>Male</span>
                            <input required onChange={(e) => setBodyData((prev) => {
                                return {
                                    ...prev,
                                    gender: e.target.value
                                }
                            })} type="radio" id='male' name='gender' value={"male"} />
                        </label>
                        <label className='flex justify-start items-center gap-1' htmlFor="female">
                            <span>Female</span>
                            <input required onChange={(e) => setBodyData((prev) => {
                                return {
                                    ...prev,
                                    gender: e.target.value
                                }
                            })} type="radio" id='female' name='gender' value={"female"} />
                        </label>
                    </div>
                </div>
                <div>
                    <select onChange={(e) => setBodyData((prev) => {
                        return {
                            ...prev,
                            groupId: e.target.value
                        }
                    })} className='form-input'>
                        {data.length > 0 ? data?.map(item => (
                            <option key={item.id} value={item.id}>{item.groupName}</option>
                        )) : ""}
                    </select>
                </div>

                <div className='flex justify-end'>
                    <button className='btn btn-solid max-w-max'>
                        {false ?
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
        </>
    )
}

export default StudentFormInput
