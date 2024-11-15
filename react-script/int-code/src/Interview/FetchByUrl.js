import React, { useState, useEffect } from 'react';

export default function FetchByUrl() {
    const [result, setResult] = useState(null);

    useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal;
        fetch('https://jsonplaceholder.typicode.com/users',{signal})
            .then(response => response.json())
            .then(data => setResult(data))
            .catch(error => console.error('Error fetching data:', error));
            return () => {
                // Abort the request when the component unmounts or when a dependency changes
                controller.abort();
            };
    }, []);
    return (
        <div>
            <table style={{ border: '2px solid forestgreen' }}>
                <thead>
                    <tr>
                        <th style={{ borderBottom: '1px solid black' }}>ID</th>
                        <th style={{ borderBottom: '1px solid black' }}>Name</th>
                        <th style={{ borderBottom: '1px solid black' }}>Email</th>
                        <th style={{ borderBottom: '1px solid black' }}>City</th>
                    </tr>
                </thead>
                <tbody>
                    {result ? result.map((item) => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>{item.address.city}</td>
                        </tr>
                    )) : (
                        <tr>
                            <td colSpan="4">Loading...</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}
