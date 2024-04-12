import styles from "./FoodInput.module.css";
let FoodInput = () => {
  const handleOnChange = (event) => {
    console.log(event.target.value);
  };

  return (
    <input
      type="text"
      placeholder="Enter Food Item here"
      className={styles.Input}
      onChange={handleOnChange}
    ></input>
  );
};
export default FoodInput;
