import { useState } from 'react'
import './App.css';
import Form from './Components/Form';
import TodoList from './Components/TodoList'

function App() {
  const [inputText, setInputText] = useState("");
  const [todos , setTodos] = useState([]);

  return (
    <div className="App">
     <header>
        <h1>My Todo List</h1>
     </header>
      <Form setInputText = {setInputText} 
            setTodos = {setTodos}
            todos = {todos}
            inputText = {inputText} />
      <TodoList setTodos = {setTodos} todos = {todos}/>
    </div>
  );
}

export default App;
