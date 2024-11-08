import React,{useState} from 'react'

export default function Checkbox() {
    const [liked,setLiked] = useState(true);

     function handleCheck(e){
        setLiked(e.target.checked)
     }
  return (
    <div>
        <p>Checkbox</p>
        <lable>
            <input type="checkbox" checked={liked} onChange={handleCheck}/>
         I liked this
        </lable>
        <p>You {liked ? 'liked' : 'did not like'} this.</p>
    </div>
  )
}
