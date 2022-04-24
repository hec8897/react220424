import { useState,useRef } from "react";
import "./App.css";
import TodoList from "./components/TodoList";
import TodoCreate from "./components/TodoCreate";

function App() {
  const nextId = useRef(1)
  const [lists, setLists] = useState([
    {
      id: 0,
      name: "dawoon",
      desc: "할일",
    },
  ]);

  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");

  const onChange = () => {
    console.log(name,desc)
    setLists([...lists, { id: nextId.current, name, desc }]);
    nextId.current += 1;
  };
  
  const onChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    name === "name" ? setName(value) : setDesc(value);
  };

  return (
    <div className="App">
      <TodoCreate onChange={onChange} onChangeName={onChangeName}/>
      <TodoList TodoList={lists} />
    </div>
  );
}

export default App;
