import { useState } from "react";

interface props{
    onChange:()=>void
    onChangeName:(e:React.ChangeEvent<HTMLInputElement>)=>void
}

function TodoCreate({onChange,onChangeName}:props) {

  return (
    <div>
      <input type="text" onChange={onChangeName} name="name" />
      <input type="text" onChange={onChangeName} name="desc" />
      <button onClick={onChange}>버튼</button>
    </div>
  );
}

export default TodoCreate;
