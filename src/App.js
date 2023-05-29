import React,{useState} from 'react';
import Header from './Header'
import Footer from './Footer'
import CreateNote from './CreateNote';
import Note from './Note'
import './App.css';
import './note.css'

function App() {
  const [addItem,setAddItem]=useState([])
  const addNote=(note)=>{
    // alert('i am clicked')
    setAddItem((prevData)=>{
        return [...prevData,note]
    })
   console.log(note)
  };
const onDelete=(id)=>{
  setAddItem((oldData)=>
    oldData.filter((currData,indx)=>{
      return indx !== id;
    })
  )
  
}
 
  return (
    <>
      <Header/>
      <CreateNote passNote={addNote}/>
     
      <div className='finalNote'>
      {addItem.map((val,index)=>{
          return <Note 
            key={index} id={index} title={val.title}
           content={val.content} deleteItem={onDelete}/>
      })}
      </div>
      {/* <div className='footer'>
       <Footer/>
       </div> */}
      
    </>
  );
}

export default App;
