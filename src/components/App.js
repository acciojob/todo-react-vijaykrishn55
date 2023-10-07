
import React,{useState} from "react";
import './../styles/App.css';



const App = () => {
  const [value,setValue]=useState("");
  const [todo,setTodo]=useState([]);
  const addTask=()=>{
    setTodo([...todo,value]);
    setValue("");
  }
  const deleteTodo=(index)=>{
    let updatedTodo=[...todo];
    updatedTodo.splice(index,1);
    setTodo([...updatedTodo]);
  }
  return (
    <div>
        {/* Do not remove the main div */}
        <div>
        <input type="text" onChange={(e)=>setValue(e.target.value)} value={value} />
        <button onClick={addTask}>add Task</button>
        </div>
        <div>
        <ul>
          {todo.map((todos,index)=>(
          <li key={index}>{todos}
          <button onClick={()=>deleteTodo(index)}>delete</button>
          </li>
          ))}
          </ul>
        </div>
        
    </div>
  )
}

export default App
