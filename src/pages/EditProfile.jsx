import React, { useContext, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import TopBar from '../components/topbar'
import { AuthContext } from '../context/authContext'
import { BorderColor } from '@mui/icons-material'
import axios from 'axios'

const EditProfile = () => {
    const { id } = useParams()
    const [file, setFile] = useState(null)
    const { user, dispatch } = useContext(AuthContext)
    const [desc, setDesc] = useState(user?.desc ? user.desc : "")
    const [from, setFrom] = useState(user?.from ? user.from : "")
    const [city, setCity] = useState(user?.city ? user.city : "")
    const presetKey = process.env.REACT_APP_PRESET_KEY
    const cloudName = process.env.REACT_APP_CLOUD_NAME
    const navigate = useNavigate();

    // api endpoints
    const baseUrl = process.env.REACT_APP_BASE_URL

    // default image
    const imgSrc = user?.profilePicture ? user?.profilePicture : `${baseUrl}/images/Person/10.png`

    // confirm profile edit
    const handleEdit = async () => {
        const newUser = {
            userId: user._id,
            desc: desc,
            from: from,
            city: city
        }
        const formData = new FormData()

        // upload image to cloudinary
        if (file) {

            formData.append("file", file);
            formData.append("upload_preset", presetKey)
            formData.append("folder", "Profiles")
            try {
                const res = await axios.post(`https://api.cloudinary.com/v1_1/${cloudName}/image/upload`, formData)
                newUser.profilePicture = res.data.secure_url
            } catch (error) {
                console.log(error);
            }
        }

        // request to update user
        try {
            await axios.put(baseUrl + `/api/users/${id}`, newUser);
            const res = await axios.get(`${baseUrl}/api/users/?userId=${id}`)
            dispatch({ type: "LOGIN_SUCCESS", payload: res.data })
            sessionStorage.setItem("user", JSON.stringify(res.data));
            navigate("/")
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <TopBar />
            <div className='w-full mt-8 p-2.5'>
                <div className='relative flex items-center justify-center'>
                    <img src={file ? URL.createObjectURL(file) : imgSrc} alt="" className='object-cover w-48 h-48 rounded-full' />
                    <label htmlFor="edit">
                        <div className='absolute bottom-0 right-[50%] translate-x-[90px] flex items-center justify-center w-8 h-8 text-white rounded-md bg-customPrimary'>
                            <BorderColor />
                        </div>
                        <input type="file" id='edit' accept='.png, .jpeg, .jpg' onChange={(e) => setFile(e.target.files[0])} className='hidden' />
                    </label>
                </div>
                <div className='flex flex-col items-center justify-center gap-2 mt-7'>
                    <label htmlFor="desc" className='px-3 w-full md:max-w-[500px] h-14 py-2'>
                        <input
                            type="text"
                            id='desc'
                            placeholder="Bio"
                            value={desc}
                            onChange={(e) => setDesc(e.target.value)}
                            className='pl-2 w-full h-full border-[1px] border-b-gray-500 border-x-transparent border-t-transparent focus:outline-none text-gray-500' />
                    </label>
                    <label htmlFor="city" className='px-3 w-full md:max-w-[500px] h-14 py-2'>
                        <input
                            type="text"
                            id='city'
                            placeholder="City"
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                            className='pl-2 w-full h-full border-[1px] border-b-gray-500 border-x-transparent border-t-transparent focus:outline-none text-gray-500' />
                    </label>
                    <label htmlFor="from" className='px-3 w-full md:max-w-[500px] h-14 py-2'>
                        <input
                            type="text"
                            id='from'
                            placeholder="From"
                            value={from}
                            onChange={(e) => setFrom(e.target.value)}
                            className='pl-2 w-full h-full border-[1px] border-b-gray-500 border-x-transparent border-t-transparent focus:outline-none text-gray-500' />
                    </label>
                </div>
                <div className='flex items-center justify-center w-full mt-5'>
                    <button
                        className='px-5 py-3 text-lg font-semibold text-white border-none bg-customPrimary rounded-xl'
                        onClick={handleEdit}
                    >
                        Edit
                    </button>
                </div>
            </div>
        </>
    )
}

export default EditProfile
