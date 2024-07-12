import axios from 'axios'
import React, { useEffect, useState } from 'react'

export const useFetch = (url) => {
    const [data, setData] = useState([])
    const [error, setError] = useState(null)
    const [loading, setIsLoadin] = useState(false)

    const [postData, setPostData] = useState([])
    const [postError, setPostError] = useState(null)
    const [postLoading, setPostLoadin] = useState(false)

    const [updateData, setUpdateData] = useState([])
    const [updateError, setUpdateError] = useState(null)
    const [updateLoading, setUpdateLoadin] = useState(false)

    const [deleteData, setDeleteData] = useState([])
    const [deleteError, setDeleteError] = useState(null)
    const [deleteLoading, setDeleteLoadin] = useState(false)
    
    const getData = async (url) => {
        try {
            setIsLoadin(true)
            const res = await axios.get(url)
            setData(res.data)
            setIsLoadin(false)
        } catch (err) {
            setError(err)
            setIsLoadin(false)
        }
    }

    const postDataAxios = async (url ,bodyData) => {
        try {
            setPostLoadin(true)
            const res = await axios.post(url, bodyData)
            setPostData(res.data)
            setPostLoadin(false)
        } catch (err) {
            setPostError(err)
            setPostLoadin(false)
        }
    }

    const updateDataAxios = async (url ,bodyData, id) => {
        try {
            setUpdateLoadin(true)
            const res = await axios.put(`${url}/${id}`, bodyData)
            setUpdateData(res.data)
            setUpdateLoadin(false)
        } catch (err) {
            setUpdateError(err)
            setUpdateLoadin(false)
        }
    }

    const deleteDataAxios = async (url, id) => {
        try {
            setDeleteLoadin(true)
            const res = await axios.delete(`${url}/${id}`)
            setDeleteData(res.data)
            setDeleteLoadin(false)
        } catch (err) {
            setDeleteError(err)
            setDeleteLoadin(false)
        }
    }
    
    useEffect(() => {
        url&& getData(url)
    }, [url])
    return { data, error, loading, getData, postData, postError, postLoading, postDataAxios, updateData, updateError, updateLoading, updateDataAxios, deleteData, deleteError , deleteLoading, deleteDataAxios }
}
