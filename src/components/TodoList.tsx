import List from "./List";

interface listType {
  id: number;
  name: string;
  active: boolean;
}

interface props {
  TodoList: Array<listType>;
  onActive: (id: number) => void;
  onRemove: (id: number) => void;
  onUpdate: (id: number, name: string) => void;
}

function TodoList({ TodoList, onActive, onRemove, onUpdate }: props) {
  return (
    <div>
      <ul>
        {TodoList.map((ele) => (
          <li style={{ color: ele.active ? "red" : "#222" }} key={ele.id}>
            <List
              id={ele.id}
              name={ele.name}
              active={ele.active}
              onActive={onActive}
              onRemove={onRemove}
              onUpdate={onUpdate}
            ></List>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
