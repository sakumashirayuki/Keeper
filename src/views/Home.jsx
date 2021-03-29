import { React, useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";

import Note from "../components/Note";
import NoTaskHeader from "../components/NoTaskHeader";
import CreateArea from "../components/CreateArea";

import { fetchNotes, addNote, deleteNote, getNote } from "../redux/actions"

const selectNotes = state => state.notesArray;

function Home() {
  const notes = useSelector(selectNotes);
  const dispatch = useDispatch();
  useEffect(()=>{
    console.log("use effect");
    const loading = async () => {
      await dispatch(fetchNotes());
    };
    loading();
    console.log("what happened?");
  }, [dispatch]);
  return (
    <div className={notes.length > 0 ? "" : "hints"}>
      <CreateArea addFunction={(newNote)=>dispatch(addNote(newNote))} />
      {notes.length > 0 ? (
        notes.map((note, index) => (
          <Note
            key={note.id}
            id={note.id}
            title={note.title}
            content={note.content}
            clickDeleteFunction={(noteId)=>dispatch(deleteNote(noteId))}
            clickUpdateFunction={(noteId)=>dispatch(getNote(noteId))}
          />
        ))
      ) : (
        <NoTaskHeader />
      )}
    </div>
  );
}
export default Home;
