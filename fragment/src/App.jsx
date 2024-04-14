import ErrorMessage from "./ErrorMessage";
import FoodItems from "./FoodItems";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Container from "./Container";
import FoodInput from "./FoodInput";
import { useState } from "react";

function App() {
  // let foodItem = [];

  let textStateArr = useState();
  let textToShow = textStateArr[0];
  let setTextState = textStateArr[1];
  let [foodItem, setFoodItem] = useState(["honey", "Curd", "ghee"]);

  const onKeyDown = (event) => {
    if (event.key === "enter") {
      let newFoodItem = event.target.value;
      console.log("food value is" + newFoodItem);
    }
  };

  return (
    <>
      <Container>
        <h1 className="food-heading">Healthy Food</h1>

        <ErrorMessage items={foodItem}></ErrorMessage>
        <FoodInput onKeyDown={onKeyDown}></FoodInput>

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
