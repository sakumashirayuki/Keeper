import { createStore } from "redux";

import notes from "../notes";
import { ADD, DELETE, GET, UPDATE } from "./actions";

const initState = {
  notesArray: notes,
  curUpdate: null
};

const noteReducer = (state = initState, action) => {
  switch (action.type) {
    case ADD:
      const newId = state.notesArray.length + 1;
      const newNote = {
        ...action.note,
        id: newId
      };
      console.log(newNote);
      return {
        ...state, 
        notesArray : [...state.notesArray, newNote]
      };
    case DELETE:
      return {
        ...state,
        notesArray : state.notesArray.filter((note)=>note.id!==action.id)
      };
    case GET:
      console.log("triggered!");
      return {
        ...state,
        curUpdate : state.notesArray.find((note)=>note.id==action.id)
      };
    case UPDATE:
      const deleteTargetArray = state.notesArray.filter((note)=>note.id!==action.note.id);
      console.log(deleteTargetArray);
      const addTargetArray = [...deleteTargetArray, action.note]; // this is the updated note array
      console.log(addTargetArray);
      return {
        notesArray: addTargetArray,
        curUpdate: null // reset
      };
    default:
      return state;
  }
};

const store = createStore(noteReducer); // combine
export default store;
