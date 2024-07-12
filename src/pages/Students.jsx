import { CgSpinner } from "react-icons/cg";
import React from 'react'
import { useFetch } from '../hooks/useFetch'
import StudentsCard from '../components/page-comp/StudentsCard'

const Students = () => {
    const url = "http://localhost:3000/students"
    const { data, error, loading } = useFetch(url)

    return (
        <div>
            {loading ?
                <div className='h-[60vh] text-[20px] font-semibold flex justify-center items-center gap-2'>
                    <div className="animate-spin text-[30px]">
                        <CgSpinner />
                    </div>
                    <span>Loading ...</span>
                </div>
                :
                <table className='students-table'>
                    <thead>
                        <tr>
                            <th>№</th>
                            <th>Full name</th>
                            <th>Email</th>
                            <th>Phone number</th>
                            <th>Gender</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item, index) => (
                            <StudentsCard item={item} index={index} key={item.id}/>
                        ))}
                    </tbody>
                </table>}
        </div>
    )
}

export default Students
