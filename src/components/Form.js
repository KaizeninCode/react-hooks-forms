import React from "react";

function Form(props) {
  const handleSubmit = (e) => e.preventDefault()
  return (
    <form>
      <input 
        type="text" 
        onChange={props.handleFirstNameChange} 
        value={props.firstName} 
      />
      <input 
        type="text" 
        onChange={props.handleLastNameChange} 
        value={props.lastName} 
      />
      <button type="submit" onSubmit={handleSubmit}>Submit</button>
    </form>
  );
}

export default Form;
