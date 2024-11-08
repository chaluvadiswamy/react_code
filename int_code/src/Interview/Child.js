import React from 'react'

export default function Child({sendData}) {

    const handleChild =()=>{
        sendData("Hello From Child")
    }

  return (
    <div>
      <h1>Child Component</h1>
      <button onClick={handleChild}>Send To Parent</button>
    </div>
  )
}
