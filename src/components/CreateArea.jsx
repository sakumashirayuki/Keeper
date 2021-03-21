import React from "react";

import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";

function CreateArea(props) {
  const [inputs, setInputs] = React.useState({ title: "", content: "" });
  const [isFold, setIsFold] = React.useState(true);

  function handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((prevInputs) => {
      return { ...prevInputs, [name]: value };
    });
  }

  function handleTitleClick() {
    setIsFold(false);
  }

  return (
    <div>
      <form className="create-note">
        {!isFold && (
          <input
            name="title"
            placeholder="Title"
            onChange={handleChange}
            value={inputs.title}
          />
        )}
        <textarea
          name="content"
          placeholder="Take a note..."
          rows={isFold ? 1 : 3}
          onChange={handleChange}
          value={inputs.content}
          onClick={handleTitleClick}
        />
        <Zoom in={!isFold}>
          <Fab
            onClick={(event) => {
              props.addFunction(inputs);
              event.preventDefault();
              setInputs({ title: "", content: "" });
            }}
          >
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
