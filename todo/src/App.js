import { useState } from "react";
import Form from "./Components/Form";
import TodoList from "./Components/TodoList";
import "./App.css";

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  return (
    <div className="App">
      <header>
        <h1>Umut's Todo List</h1>
      </header>
      <Form {...{ todos, setTodos, inputText, setInputText }} />
      <TodoList />
    </div>
  );
}

export default App;
