import React,{useEffect,useState} from 'react'
//useEffect Hook Increment
export default function Count1() {
     const [count,setCount] =useState(0);
     useEffect(()=>{
        console.log("Component rendered successfully : ",count);
        return ()=>{
            console.log('Clear the Count');
        }
     },[count])
  return (
    <div>
       <button onClick={() => setCount(count + 1)}>Click me</button>
       <p>You clicked {count} times</p>
    </div>
  )
}
