import React from "react";

import { connect } from "react-redux";

import Note from "../components/Note";
import NoTaskHeader from "../components/NoTaskHeader";
import CreateArea from "../components/CreateArea";

import { addNote, deleteNote, getNote } from "../redux/actions"

function Home(props) {
  return (
    <div className={props.notesArray.length > 0 ? "" : "hints"}>
      <CreateArea addFunction={props.submitNote} />
      {props.notesArray.length > 0 ? (
        props.notesArray.map((note, index) => (
          <Note
            key={note.id}
            id={note.id}
            title={note.title}
            content={note.content}
            clickDeleteFunction={props.removeNote}
            clickUpdateFunction={props.updateNote}
          />
        ))
      ) : (
        <NoTaskHeader />
      )}
    </div>
  );
}

const mapStateToProps = (state) => {
  return { notesArray: state.notesArray };
};
const mapDispatchToProps = (dispatch) => {
  return {
    submitNote: (newNote) => {
      dispatch(addNote(newNote));
    },
    removeNote: (noteId) => {
      dispatch(deleteNote(noteId));
    },
    updateNote: (noteId) => {
      dispatch(getNote(noteId));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
