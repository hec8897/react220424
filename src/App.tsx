import { useState, useRef } from "react";
import "./App.css";
import TodoList from "./components/TodoList";
import TodoCreate from "./components/TodoCreate";

function App() {
  const nextId = useRef(1);
  const [lists, setLists] = useState([
    {
      id: 0,
      name: "dawoon",
      desc: "할일",
      active: false,
    },
  ]);

  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");

  const onChange = () => {
    setLists([...lists, { id: nextId.current, name, desc, active: false }]);
    nextId.current += 1;
  };

  const onChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    name === "name" ? setName(value) : setDesc(value);
  };

  const onActive = (id: number) => {
    setLists(
      lists.map((ele) => {
        return ele.id === id ? { ...ele, active: !ele.active } : ele;
      })
    );
  };

  const onRemove = (id:number) =>{
    setLists(
      lists.filter((ele)=>{
        return ele.id !== id
      })
    )
  }

  return (
    <div className="App">
      <TodoCreate onChange={onChange} onChangeName={onChangeName} />
      <TodoList TodoList={lists} onActive={onActive} onRemove={onRemove}/>
    </div>
  );
}

export default App;
