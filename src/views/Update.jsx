import React from "react";

import { connect } from "react-redux";

import CreateArea from "../components/CreateArea";

import { updateNote } from "../redux/actions"

function Update(props) {
  return (
    <div>
      <CreateArea addFunction={props.submitNote} curUpdate={props.curUpdate}/>
    </div>
  );
}
const mapStateToProps = (state) => {
  return { curUpdate: state.curUpdate }; // curUpdate is a note obj
};
const mapDispatchToProps = (dispatch) => {
    return {
      submitNote: (updatedNote) => {
        dispatch(updateNote(updatedNote));
      }
    };
  };
export default connect(mapStateToProps, mapDispatchToProps)(Update);
