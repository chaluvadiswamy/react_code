import React,{useState} from 'react';
import Child from './Child';


export default function Parent() {
    const [data,setData] = useState('');
    const handleData = (childData)=>{
        setData(childData);
    }
  return (
    <div>
        <h1>Parent Component</h1>
        <p>Data From Child : {data}</p>
      <Child sendData={handleData}/>
    </div>
  )
}
