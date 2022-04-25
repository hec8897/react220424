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
      active: false,
    },
  ]);

  const [name, setName] = useState("");

  const onChange = () => {
    setLists([...lists, { id: nextId.current, name, active: false }]);
    nextId.current += 1;
  };

  const onUpdate = (id: number,name:string) =>{
    setLists(
      lists.map((ele) => {
        return ele.id === id ? { ...ele, name: name } : ele;
      })
    );
  }

  const onChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setName(value);
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
      <TodoList TodoList={lists} onActive={onActive} onRemove={onRemove} onUpdate={onUpdate}/>
    </div>
  );
}

export default App;
