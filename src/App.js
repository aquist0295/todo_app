import { useState, useEffect } from 'react'
import './App.css';
import Form from './Components/Form';
import TodoList from './Components/TodoList'

function App() {
  const [inputText, setInputText] = useState("");
  const [todos , setTodos] = useState([]);
  const [status, setStatus] = useState("All");
  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect(() => {
    filterHandler();
    saveLocalTodos();
    //getLocalTodos();
  }, [todos, status]);

  const saveLocalTodos = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  const getLocalTodos = () => {
    if(localStorage.getItem("todos") === null){
      localStorage.setItem("todos", JSON.stringify(todos));
    }
    else{
      let todoLocal = JSON.parse(localStorage.getItem("todos"));
      setTodos(todoLocal);
    }
  }

  const filterHandler  = () => {
      switch(status) {
          case 'completed' :
            setFilteredTodos(todos.filter(todo => todo.completed === true));
            break;

          case 'uncompleted' :
              setFilteredTodos(todos.filter(todo => todo.completed === false));
              break; 

          default :
              setFilteredTodos(todos);
              break;
      }
  };

  return (
    <div className="App">
     <header>
        <h1>My Todo List</h1>
     </header>
      <Form setInputText = {setInputText} 
            setTodos = {setTodos}
            todos = {todos}
            inputText = {inputText} 
            setStatus = {setStatus}
            />
      <TodoList setTodos = {setTodos} 
                todos = {todos}
                filteredTodos = {filteredTodos}
                />
    </div>
  );
}

export default App;
