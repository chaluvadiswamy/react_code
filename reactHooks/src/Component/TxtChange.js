import React,{useState} from 'react'

export default function TxtChange() {
    const [inputValue, setInputValue] = useState('')

     function handleChange(e){
        setInputValue(e.target.value)
     }
  return (
    <div>
        <p>TxtChange</p>
        <input type='text' onChange={handleChange} name='inputValue' value={inputValue}/>
         Your Text : {inputValue}
         <button onClick={()=>setInputValue('')}>Reset</button>
    </div>
  )
}
