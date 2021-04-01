import React from "react";

import { useSelector, useDispatch } from "react-redux";

import CreateArea from "../components/CreateArea";

import { updateNote } from "../redux/actions"

const selectCurUpdate = state => state.curUpdate;

function Update() {
  const currentNote = useSelector(selectCurUpdate);
  const dispatch = useDispatch();
  return (
    <div>
      <CreateArea addFunction={(updatedNote)=>dispatch(updateNote(updatedNote))} curUpdate={currentNote}/>
    </div>
  );
}
export default Update;
