import React from "react";
// react-bootstrap
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

function Note(props) {
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <DropdownButton id="dropdown-basic-button" title="">
        <Dropdown.Item href="/update">Update</Dropdown.Item>
        <Dropdown.Item
          onClick={() => {
            props.clickDeleteFunction(props.id);
          }}
        >
          Delete
        </Dropdown.Item>
      </DropdownButton>
    </div>
  );
}

export default Note;
