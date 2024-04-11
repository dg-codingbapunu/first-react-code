import styles from "./Item.module.css";

function Item({ foodItem }) {
  return (
    <li className={`${styles["kg-item"]} `}>
      <span className={`${styles["kg-span"]}`}>{foodItem}</span>
    </li>
  );
}
export default Item;
