import React,{useState} from 'react';
//useState Hook Increment 
export default function Count() {
    const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Count : {count}</h1>
      <button onClick={()=>setCount(count + 1)}>CLICK</button>
    </div>
  )
}
