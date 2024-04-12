import styles from "./Item.module.css";

function Item({ foodItem }) {
  return (
    <li className={`${styles["kg-item"]} list-group-item `}>
      <span className={`${styles["kg-span"]}`}>{foodItem}</span>
      <button
        className={`${styles.button} btn btn-info`}
        onClick={() => alert(`${foodItem} being brought`)}
      >
        Buy
      </button>
    </li>
  );
}
export default Item;
