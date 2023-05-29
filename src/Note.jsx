import React, {useState} from 'react'
import './note.css'

const Note = (props) => {


  const deleteNote=()=>{
    props.deleteItem(props.id);
  };

 return (
  <>
  <div className='note'>
    <h3>{props.title}</h3>
    <br/>
    <p>{props.content}</p>
    <div className='delBtn'>
    <button onClick={deleteNote}>🗑️</button>
    </div>
  </div>
  </>
)
}
  

export default Note


