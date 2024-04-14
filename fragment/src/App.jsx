import ErrorMessage from "./ErrorMessage";
import FoodItems from "./FoodItems";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Container from "./Container";
import FoodInput from "./FoodInput";
import { useState } from "react";

function App() {
  let [foodItem, setFoodItem] = useState([]);

  const onKeyDown = (event) => {
    if (event.key === "Enter") {
      let newFoodItem = event.target.value;
      event.target.value = "";
      let newItems = [...foodItem, newFoodItem];
      setFoodItem(newItems);
    }
  };

  return (
    <>
      <Container>
        <h1 className="food-heading">Healthy Food</h1>

        <FoodInput onKeyDown={onKeyDown}></FoodInput>
        <ErrorMessage items={foodItem}></ErrorMessage>

        <FoodItems items={foodItem}></FoodItems>
      </Container>
      <Container>
        <p>
          Above is the list of healthy food that are good for your health and
          being
        </p>
      </Container>
    </>
  );
}
export default App;
