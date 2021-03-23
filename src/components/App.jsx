import React from "react";

import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import NoTaskHeader from "./NoTaskHeader";
import CreateArea from "./CreateArea";

// import notes from "../notes";

function App() {
  const [notesArray, setNotesArray] = React.useState([]);
  React.useEffect(()=>{
    const getNotes = async()=>{
      const notesFromServer = await fetchNotes();
      setNotesArray(notesFromServer);
    };
    getNotes();
  }, []);
// Fetch notes
  const fetchNotes = async ()=>{
    const res = await fetch('http://localhost:5000/notes');// This is just a HTTP response
    const data = await res.json();

    return(data);
  }
  async function addNote(newNote) {
    const res = await fetch('http://localhost:5000/notes',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newNote)
    });
    const data = await res.json(); // the data is the new note that's added to the server
    setNotesArray((prevArray) => {
      return [...prevArray, data];
    });
  }

  async function deleteNote(noteId) {
    await fetch(`http://localhost:5000/notes/${noteId}`, {
      method: 'DELETE'
    });
    setNotesArray((prevArray) => {
      return prevArray.filter((element) => {
        return element.id !== noteId;
      });
    });
  }

  return (
    <div>
      <Header />
      <div className={notesArray.length > 0 ? "" : "hints"}>
        <CreateArea addFunction={addNote} />
        {notesArray.length > 0 ? (
          notesArray.map((note, index) => (
            <Note
              key={note.id}
              id={note.id}
              title={note.title}
              content={note.content}
              clickFunction={deleteNote}
            />
          ))
        ) : (
          <NoTaskHeader />
        )}
        <Footer />
      </div>
    </div>
  );
}

export default App;
