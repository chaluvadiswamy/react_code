import React ,{useState } from "react";


export default function Rowlist() {
    const items = [
        { id: 1, text: "Item 1" },
        { id: 2, text: "Item 2" },
    ];
    const [list, setList] = useState([...items]);
    const [count,setCount] = useState(items.length+1);
    const addRow = () => {
       
        setCount(count+1);
        let newRow = {
          id : count,
          text : "Test Row",
        }
        console.log(newRow);
       setList([...list,newRow]);
       
      }
    const removeRow = (id) => {
        setList(list.filter((item) => item.id !== id));
        //setCount(count - 1);
    }
    const listItems = list.map((item, index) => <li key={index}>{item.text} <button onClick={() => removeRow(item.id)}> Remove Row</button></li>);
    return (<div>
        <ul>{listItems}</ul>
        <button onClick={addRow}>Add Row</button>
    </div>);
}
