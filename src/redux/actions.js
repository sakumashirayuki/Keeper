import axios from "axios"
export const ADD = 'ADD';
export const DELETE = 'DELETE';
export const GET = 'GET';
export const UPDATE = 'UPDATE';
export const LOAD = 'LOAD'

export const fetchNotes = () => {
    return async dispatch => {
        await axios
        .get("http://localhost:5000/notes")
        .then((res)=>{
            console.log(res.data);
            dispatch(loadNotes(res.data));
        }).catch(()=>{
            alert("error");
        });
        // const res = await fetch("http://localhost:5000/notes"); // This is just a HTTP response
        // const data = await res.json();
        // dispatch(loadNotes(data));
        // return data;
    }
}

export const loadNotes = (data) => {
    return {
        type: LOAD,
        allnotes: data
    };
}

export const addNote = (newNote) => {
    return {
        type: ADD,
        note: newNote
    };
}

export const deleteNote = (noteId) => {
    return {
        type: DELETE,
        id: noteId
    };
}

export const getNote = (noteId) => {
    return {
        type: GET,
        id: noteId
    };
}

export const updateNote = (updatedNote) => {
    return {
        type: UPDATE,
        note: updatedNote
    };
}
