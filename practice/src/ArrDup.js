import React from 'react'

export default function ArrDup() {

    const arrValue = [2, 3, 4, 5, 7, 2, 3, 8, 1, 4];
    const newArr = arrValue.filter((value, index) => arrValue.indexOf(value) === index);
    return (
        <>
            <div>
                <h1>Before Remove Duplication</h1>
                <ul>
                    {
                        arrValue.map((values, index) => { return (<li key={index}>{values}</li>) })
                    }
                </ul>
            </div>
            <div>
                <h1>After Remove Duplication</h1>
                <ul>
                    {
                        newArr.map((values, index) => { return (<li key={index}>{values}</li>) })
                    }
                </ul>
            </div>
        </>
    )
}
