import React,{useState} from 'react'

export default function Forminput() {
    const [name, useName] = useState('Taylor')
    const [age,setAge] = useState(42)
  return (
    <div>
        <input type="text" value={name} onChange={(e)=> setName(e.target.value)}/>

        <button onClick={() => setAge(age + 1)}>
        Increment age
            </button>
      <p>Hello, {name}. You are {age}.</p>
    </div>
  )
}
