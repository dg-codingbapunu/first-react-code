import TodoItem2 from "./component/TodoItem2";
import TodoItem1 from "./component/TodoItem1";
import AddTodo from "./component/Add todo";
import AppName from "./component/AppName";
import "./App.css";
function App() {
  return (
    <center class="todo-container">
      <AppName></AppName>
      <AddTodo></AddTodo>
      <div className="items-container">
        <TodoItem1></TodoItem1>
        <TodoItem2></TodoItem2>
      </div>
    </center>
  );
}
export default App;
