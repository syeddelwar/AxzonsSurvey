"use client"

import SurveyResultCard from '@/app/components/SurveyResultCard';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const id = () => {
    const [surveyData, setSurveyData] = useState({})
    const pathname = usePathname()
    const dataId = pathname.split("admin/")[1]
    useEffect(() => {
        fetch("http://localhost:3000/api/getUserServeyData", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({ _id: dataId })
        })
            .then(res => res.json())
            .then(data => setSurveyData(data))
    }, [])
    return (
        <div>
            <p className='font-bold text-center text-[25px] pt-8 pb-4'>Survey Answers</p>
            {
                Object.values(surveyData.surveyResult || {}).map((data, index) => <SurveyResultCard questionId={index} optionNo={data.slice(-1)} key={index} />)
            }
        </div>
    );
};

export default id;