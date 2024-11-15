import React from 'react';

//List data in the UL & Table Tags
export default function Listmap() {
    const names = ["Brian", "Paul", "Krug", "Halley"];
    const listItems = names.map((name,index) => <li key={index}>{name}</li>);
    const tableItems =  [
        { name: "Anom", age: 19, gender: "Male" },
        { name: "Megha", age: 19, gender: "Female" },
        { name: "Subham", age: 25, gender: "Male" },
    ]
    
    return (
        <>
         <ul style={{ display: 'inline' }}>{listItems}</ul>
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
           
            <table style={{ border: '2px solid forestgreen' }}>
                <thead>
                    <tr>
                        <th style={{ borderBottom: '1px solid black' }}>Name</th>
                        <th style={{ borderBottom: '1px solid black' }}>Age</th>
                        <th style={{ borderBottom: '1px solid black' }}>Gender</th>
                    </tr>
                </thead>
                <tbody>
                    {tableItems.map((item, key) => (
                        <tr key={key}>
                            <td>{item.name}</td>
                            <td>{item.age}</td>
                            <td>{item.gender}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </>
    )
}
