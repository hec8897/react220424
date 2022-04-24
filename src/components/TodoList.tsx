interface listType {
    id:number;
    name:string;
    desc:string;
}

interface props{
    TodoList:Array<listType>
}

function TodoList({TodoList}:props){
    return(
        <div>
            <ul>
                {TodoList.map((ele)=><div key={ele.id}>{ele.name}</div>)}
            </ul>
        </div>
    );

}

export default TodoList;