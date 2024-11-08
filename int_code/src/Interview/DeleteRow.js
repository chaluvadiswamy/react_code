import React ,{useState} from 'react'

export default function DeleteRow() {
    const [list,setList] = useState([]);
    const [index,setIndex] = useState(1);
    const addRow = () => {
      let newRow = {
        id : index,
        name : "Test Row",
      }
     setList([...list,newRow]);
     setIndex(index + 1);
    }
    const removeRow =  (id) =>{
      setList(list.filter((item) => item.id !== id));
    }
  return (
    <div>
      {list.map((item) => (
        <div key={item.id} >
          {item.name}  {item.id}  <button onClick={()=>removeRow(item.id)}> Remove Row</button>
        </div>
      ))}

      <button onClick={addRow}>Add Row</button>
    </div>
  )
}
