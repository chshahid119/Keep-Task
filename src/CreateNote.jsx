import React, { useState } from "react";
import "./CreateNote.css";
const CreateNote = ({passNote}) => {

  const [expand,setExpand]=useState(false);
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

const handleform=(e)=>{
  e.preventDefault()
}
  const inputEvent=(event)=>{
    const {value,name}=event.target;
    setNote((prevData)=>{
      return {
        ...prevData,
        [name]:value,
      };
    });
    console.log(note)
  }

  const addEvent=()=>{
    
    passNote(note);
    setNote({
      title: "",
      content: "",
    });
  }


  const expandIt=()=>{
    setExpand(true);
  }

  const backToNormal=()=>{
    setExpand(false);
  }
  return (
    <>
      <div className="main_note">
        <form onSubmit={handleform} className="title_textArea">
        {expand ?
          <input className="title"
           name="title"
            value={note.title}
            onChange={inputEvent}
            type="text"
            placeholder="Title"
            autoComplete="off"
            onDoubleClick={backToNormal}
          />:null}
          <textarea
          className="content"
          name="content"
            value={note.content}
            onChange={inputEvent}
            rows="7"
            column="5"
            placeholder="Write a note..." onClick={expandIt}
              onDoubleClick={backToNormal}
            />
            {expand ?
            <div className="btnDiv"> <button   onClick={addEvent}>➕</button>
            </div>  :null}
         
        </form>
      </div>
    </>
  );
};

export default CreateNote;
