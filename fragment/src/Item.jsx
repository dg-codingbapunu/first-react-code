import styles from "./Item.module.css";

function Item({ foodItem }) {
  return (
    <li classNameName={`${styles["kg-item"]} `}>
      <span classNameName={`${styles["kg-span"]}`}>{foodItem}</span>
    </li>
  );
}
export default Item;
