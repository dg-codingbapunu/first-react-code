import ErrorMessage from "./ErrorMessage";
import FoodItems from "./FoodItems";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Container from "./Container";
import FoodInput from "./FoodInput";

function App() {
  // let foodItem = [];
  let foodItem = [
    "Dal",
    "Sabji",
    "Milk",
    "Roti",
    "honey",
    "Curd",
    "ghee",
    "almonds",
    "fruits",
  ];

  return (
    <>
      <Container>
        <h1 className="food-heading">Healthy Food</h1>
        <ErrorMessage items={foodItem}></ErrorMessage>
        <FoodInput></FoodInput>
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
