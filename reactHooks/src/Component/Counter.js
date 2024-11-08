import React ,{useState} from 'react'

export default function Counter() {

    const [count,setCount]= useState(0);
    
     function handleClick(){
        setCount(count + 1)
     }

  return (
    <div>
        <p>Counter</p>
        <button onClick={handleClick}>
            You click me {count} times
        </button>

    </div>
  )
}
