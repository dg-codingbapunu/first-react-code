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

  let textToShow = "food item enter by user";

  const handleOnChange = (event) => {
    console.log(event.target.value);
    textToShow = event.target.value;
  };

  return (
    <>
      <Container>
        <h1 className="food-heading">Healthy Food</h1>

        <ErrorMessage items={foodItem}></ErrorMessage>
        <FoodInput handleOnChange={handleOnChange}></FoodInput>
        <p>{textToShow}</p>
        <FoodItems items={foodItem}></FoodItems>
      </Container>
      {/* <Container>
        <p>
          Above is the list of healthy food that are good for your health and
          being
        </p>
      </Container> */}
    </>
  );
}
export default App;
