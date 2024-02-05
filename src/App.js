import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';

function App() {
  let [todolist, setTodolist] = useState([])
  let saveToDoList = (event) =>{
    let toname = event.target.toname.value
    if(!todolist.includes(toname)){
      let finalToDoList = [...todolist, toname]
      setTodolist(finalToDoList)

    }else{
      alert("ToDo Name Already Exists...")
    }


    event.preventDefault();
  }
  let list = todolist.map((value, index)=>{
    return(
      <TodolistItems value={value} key={index} indexnumber={index} todolist={todolist} setTodolist={setTodolist}/>
    )
  })
  return (
    <div className="App">
      <h1>ToDo List</h1>
      <form onSubmit={saveToDoList}>
        <input type="text" name="toname"/> <button>Save</button>
      </form>
      <div className="outerdiv">
      <ul>
        {list}
      </ul>
      </div>
    </div>
  );
}

export default App;

function TodolistItems({value,indexnumber,todolist,setTodolist}){
  let[status, setStatus] = useState(false)
  let deleteRow=()=>{
    let finaldata = todolist.filter((v,i) =>i != indexnumber)
    setTodolist(finaldata)
  }

  let checkStatus=()=>{
    setStatus(!status)
  }
  return(
    <li className={(status)? 'completetodo': ''} onClick={checkStatus}>{value} <span onClick={deleteRow}>&times;</span></li>
  )
}
