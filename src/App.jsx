import AddTodo from "./component/Add todo";
import AppName from "./component/AppName";

import TodoItems from "./2 create react components/TodoItems";
import "./App.css";

function App() {
  const todoItems = [
    {
      name: "Go To College",
      dueDate: "20/04/2024",
    },
    {
      name: "Watch Ipl",
      dueDate: "14/04/2024",
    },
    {
      name: "learn react",
      dueDate: "14/02/2024",
    },
  ];
  return (
    <center className="todo-container">
      <AppName></AppName>
      <AddTodo></AddTodo>
      <TodoItems todoItems={todoItems}></TodoItems>
    </center>
  );
}
export default App;
