import ErrorMessage from "./ErrorMessage";
import FoodItems from "./FoodItems";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  // let foodItem = [];
  let foodItem = [
    "Dal",
    "Sabji",
    "Milk",
    "Roti",
    "Ghee",
    "Curd",
    "ghee",
    "egg",
  ];

  return (
    <>
      <h1>Healthy Food</h1>
      <ErrorMessage items={foodItem}></ErrorMessage>
      <FoodItems items={foodItem}></FoodItems>
    </>
  );
}
export default App;
