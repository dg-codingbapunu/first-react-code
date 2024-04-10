import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  let FoodItem = ["Dal", "Sabji", "Milk", "Roti", "Ghee", "Curd", "ghee"];
  return (
    <>
      <h1>Healthy Food</h1>
      <ul className="list-group">
        {FoodItem.map((item) => (
          <li key={item} className="list-group-item">
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
export default App;
