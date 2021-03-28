export const ADD = 'ADD';
export const DELETE = 'DELETE';
export const GET = 'GET';
export const UPDATE = 'UPDATE';

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
