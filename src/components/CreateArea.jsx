import React from "react";

import { Link } from "react-router-dom";

import AddIcon from "@material-ui/icons/Add";
import Button from "@material-ui/core/Button";
import Zoom from "@material-ui/core/Zoom";

function CreateArea(props) {
  let initInputState;
  if(props.curUpdate){
    initInputState = { title: props.curUpdate.title, content: props.curUpdate.content };
  }else{
    initInputState = { title: "", content: "" };
  }
  const [inputs, setInputs] = React.useState(initInputState);
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
          <Button
            to={'/'}
            component={Link}
            onClick={(event) => {
              if(props.curUpdate){ // update
                console.log("update id", props.curUpdate.id);
                const updateNote = {
                  ...inputs,
                  id: props.curUpdate.id
                };
                props.addFunction(updateNote);
              }else{ // create new
                console.log(props);
                props.addFunction(inputs);
              }
            }}
          >
            <AddIcon />
          </Button>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
