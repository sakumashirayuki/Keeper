import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import axios from "axios"
import { v4 as uuidv4 } from 'uuid';

import { LOAD, ADD, DELETE, GET, UPDATE } from "./actions";

const initState = {
  notesArray: [],
  curUpdate: null
};

const noteReducer = (state = initState, action) => {
  switch (action.type) {
    case LOAD:
      console.log("start loading");
      return {
        notesArray: action.allnotes,
        curUpdate: null
      };
    case ADD:
      const newId = uuidv4();
      const newNote = {
        ...action.note,
        id: newId
      };
      console.log(newNote);
      const addToServer = async(note)=>{
        await axios({
          method: 'post',
          url: 'http://localhost:5000/notes',
          data: note
        });
      }
      addToServer(newNote);
      return {
        ...state, 
        notesArray : [...state.notesArray, newNote]
      };
    case DELETE:
      const deleteToServer = async(noteId)=>{
        await axios.delete(`http://localhost:5000/notes/${noteId}`);
      }
      deleteToServer(action.id);
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
      const targetNote = state.notesArray.find((note)=>note.id===action.note.id);
      if(targetNote){
        targetNote.title = action.note.title;
        targetNote.content = action.note.content;
      }
      const updateToServer = async(noteId)=>{
        await axios.put(`http://localhost:5000/notes/${noteId}`, targetNote);
      }
      updateToServer(action.note.id);
      return state;
    default:
      return state;
  }
};

const store = createStore(noteReducer, applyMiddleware(thunk)); // combine
export default store;
