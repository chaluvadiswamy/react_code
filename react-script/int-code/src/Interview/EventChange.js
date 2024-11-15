import React, { useState } from 'react';

//Event Change using function component

export default function EventChange() {
    const [value, setValue] = useState('');
    const [data,setData] = useState('');
    const handleOnchange = (e) => {
        e.preventDefault();
        setValue(e.target.value)
    }
    const  {firstname,lastname} = data;
    const multiOnchange = (e) =>{
        setData({...data,[e.target.name]:e.target.value});
    }
    return (
        <div>
            <div>
                <h1>On Change Fetch Single Field</h1>
                <input type="text" onChange={handleOnchange} name="inputname" value={value} />
                <p>Name : {value}</p>
            </div>
            <div>
                <h1>Fetch Multiple Values</h1>
                <label>First Name:</label>
                <input type="text" onChange={multiOnchange} placeholder="Enter First Name" name="firstname" value={firstname} />
                <label>Last Name:</label>
                <input type="text" onChange={multiOnchange} placeholder="Enter Last  Name" name="lastname" value={lastname} />
                <p>{firstname} {lastname}</p>
            </div>

        </div>
    )
}
