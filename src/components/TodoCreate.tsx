interface props{
    onChange:()=>void
    onChangeName:(e:React.ChangeEvent<HTMLInputElement>)=>void
}

function TodoCreate({onChange,onChangeName}:props) {

  return (
    <div>
      <input type="text" onChange={onChangeName} name="name" />
      <button onClick={onChange}>버튼</button>
    </div>
  );
}

export default TodoCreate;
