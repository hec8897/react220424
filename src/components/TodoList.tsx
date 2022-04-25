interface listType {
  id: number;
  name: string;
  desc: string;
  active: boolean;
}

interface props {
  TodoList: Array<listType>;
  onActive: (id: number) => void;
  onRemove: (id: number) => void;
}

function TodoList({ TodoList, onActive, onRemove }: props) {
  return (
    <div>
      <ul>
        {TodoList.map((ele) => (
          <li key={ele.id} style={{ color: ele.active ? "red" : "#222" }}>
            <div>
              <b onClick={() => onActive(ele.id)}>{ele.name}</b> : {ele.desc}
              <button onClick={() => onRemove(ele.id)}>삭제</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
