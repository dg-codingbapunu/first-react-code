import styles from "./FoodInput.module.css";
let FoodInput = ({ onKeyDown }) => {
  return (
    <input
      type="text"
      placeholder="Enter Food Item here"
      className={styles.Input}
      onKeyDown={onKeyDown}
    ></input>
  );
};
export default FoodInput;
