import React from "react";

function CreateArea(props) {
    const [inputs, setInputs] = React.useState({ title: "", content: "" });
    function handleChange(event) {
        const name = event.target.name;
        const value = event.target.value;
        setInputs((prevInputs) => {
            return { ...prevInputs, [name]: value };
        });
    }

    return (
        <div>
            <form>
                <input name="title" placeholder="Title" onChange={handleChange} value={inputs.title} />
                <textarea name="content" placeholder="Take a note..." rows="3" onChange={handleChange} value={inputs.content} />
                <button onClick={(event)=>{
                    props.addFunction(inputs);
                    event.preventDefault();
                    setInputs({title: "", content: ""});
                }}>Add</button>
            </form>
        </div>
    );
}

export default CreateArea;
