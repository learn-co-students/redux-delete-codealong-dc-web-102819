import React from "react";

const Todo = (props) => {
    const {text, id} = props.todo
  return (
    <div>
        <li style={{display:"inline"}}>{text}</li> &nbsp;&nbsp;
        <button onClick={()=>props.deleteTodo(id)}>Delete</button>
    </div>
  )
};

export default Todo;
