import React,{useState} from 'react';
import './App.css';
import Form from './Components/Form'
import TodoList from './Components/TodoList';

function App() {
  const [inputText,setInputText] = useState("");
  const [todo,setTodo] = useState([])
  return (
    <div className="App">
     <header>
       <h1>Todo List</h1>
     </header>
     <Form todo={todo}
      setTodo={setTodo}
       inputText={inputText} 
       setInputText={setInputText}/>
     <TodoList todo={todo}  setTodo={setTodo} />
    </div>
  );
}

export default App;
