import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  let foodItem = ["Dal", "Sabji", "Milk", "Roti", "Ghee", "Curd", "ghee"];
  // let foodItem = [];
  if (foodItem.length === 0) {
    return <h4>Im hungry</h4>;
  }

  return (
    <>
      <h1>Healthy Food</h1>
      <ul className="list-group">
        {foodItem.map((item) => (
          <li key={item} className="list-group-item">
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
export default App;
