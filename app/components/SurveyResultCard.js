import { data } from '../../app/components/data';
import React from 'react';

const SurveyResultCard = ({ questionId, optionNo }) => {
    // console.log(data[questionId])
    const question = data[questionId].question
    const option = data[questionId].label[parseInt(optionNo) - 1]

    // console.log(data)
    return (
        <>
            <div className='p-4 m-4 rounded-md bg-green-200 font-medium'>
                <p>
                    <span className='font-bold'>Question: </span>
                    {question}
                </p>
                <p>
                    <span className='font-bold'>Selected Option: </span>
                    {option}
                </p>
            </div>
        </>
    );
};

export default SurveyResultCard;