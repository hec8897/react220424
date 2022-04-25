import { useState } from "react";

interface props {
  id: number;
  name: string;
  active: boolean;
  onActive: (id: number) => void;
  onRemove: (id: number) => void;
  onUpdate: (id: number, name: string) => void;
}

function List({ id, name, onUpdate, onActive, onRemove }: props) {
  const [mode, setMode] = useState(false);
  const [updateInput, setUpdateInput] = useState(name);
  const updateList = () => {
    onUpdate(id, updateInput);
    setMode(false);
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setUpdateInput(value);
  };

  return (
    <div>
      {mode ? (
        <input type="text" onChange={onChange} value={updateInput} />
      ) : (
        <b onClick={() => onActive(id)}>{name}</b>
      )}
      <div>
        <button onClick={() => onRemove(id)}>삭제</button>
        {mode ? (
          <button onClick={() => updateList()}>수정완료</button>
        ) : (
          <button onClick={() => setMode(true)}>수정하기</button>
        )}
      </div>
    </div>
  );
}

export default List;
