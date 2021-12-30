/*import React from 'react';*/



const Form =  ({setInputText, setTodos, todos, inputText}) => {
    const inputTextHandler = (e) => {
        console.log(e.target.value);
        setInputText(e.target.value)
    };

    const submitHandler = (e) => {
        e.preventDefault();
        setTodos([
               ...todos,
               {text : inputText , completed : false, id : Math.random() * 1000} 
        ]);
        setInputText("");
    };

    return(
        <form>
            <input value = {inputText} onChange = {inputTextHandler} type = "text" className = "todo-input"/>
            <button onClick = {submitHandler} className = "todo-button" type = "submit">
                <i className = "fas fa-plus-square"></i>
            </button>
            
            <div className = "select">
                <select name = "todos" className = "filter-todo">
                    <option value = "blank"></option> 
                    <option value = "all"> All</option> 
                    <option value ="completed">Completed</option>
                    <option value ="uncompleted">UnCompleted</option>
                </select>
            </div>
        </form>
    );
}

export default Form;