import React from 'react'


export default function ButtonComponent(props) {

  
   //console.log(props.name)
   //const name = this.props.name;
  return (
    <div>
      <button name={props.name}>{props.name}</button>
    </div>
  )
}

