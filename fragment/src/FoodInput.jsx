import styles from "./FoodInput.module.css";
let FoodInput = ({ handleOnChange }) => {
  return (
    <input
      type="text"
      placeholder="Enter Food Item here"
      className={styles.Input}
      onKeyDown={handleOnChange}
    ></input>
  );
};
export default FoodInput;
