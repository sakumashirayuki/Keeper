import React from "react";

import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea"

import notes from "../notes";

function App() {
  const [notesArray, setNotesArray] = React.useState(notes);

  function addNote(newNote){
    setNotesArray((prevArray)=>{
      return [...prevArray, newNote];
    })
    console.log(notesArray);
  }

  function deleteNote(noteId){
    setNotesArray((prevArray)=>{
      return prevArray.filter((element, index)=>{
        return index!==noteId;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea addFunction={addNote}/>
      {notesArray.map((note, index) => (
        <Note key={index} id={index} title={note.title} content={note.content} clickFunction={deleteNote}/>
      ))}
      <Footer />
    </div>
  );
}

export default App;
