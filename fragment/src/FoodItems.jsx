import { useState } from "react";
import Item from "./Item";
function FoodItems({ items }) {
  let [activeItems, setActiveItems] = useState([]);
  let onBuybutton = (item, event) => {
    let newItems = [...activeItems, item];
    setActiveItems(newItems);
  };
  return (
    <ul className="list-group">
      {items.map((item) => (
        <Item
          key={item}
          foodItem={item}
          bought={activeItems.includes(item)}
          handleBuyButton={(event) => onBuybutton(item, event)}
        ></Item>
      ))}
    </ul>
  );
}
export default FoodItems;
