"use client"

import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const inddex = () => {
    const [surveyData, setSurveyData] = useState()
    const router = useRouter()
    useEffect(() => {
        fetch("http://localhost:3000/api/getSurveyData")
            .then(res => res.json())
            .then(data => setSurveyData(data))
    }, [])
    const handleClick = (_id) => {
        router.push("http://localhost:3000/admin/" + _id)
    }
    return (
        <div>
            <h1 className='text-center text-[25px] font-bold mb-8 mt-4'>Survey Takers</h1>
            <div className='grid grid-cols-2'>
                <div className='text-center font-bold rounded-md bg-green-200 text-[20px] mx-8 py-1'>Name</div>
                <div className='text-center font-bold rounded-md bg-green-200 text-[20px] mx-8 py-1'>Email</div>
            </div>
            {surveyData?.map(data => (
                <div onClick={() => handleClick(data._id)} className='cursor-pointer grid grid-cols-2 text-center font-bold rounded-md bg-green-200 text-[20px] mx-8 py-1 my-2' key={data._id}>
                    <div >{data.surveyUserData?.name}</div>
                    <div >{data.surveyUserData?.email}</div>
                </div>
            ))}
        </div>
    );
};

export default inddex;