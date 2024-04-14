import Display from "./component/Display";
import ButtonContainer from "./component/ButtonContainer";
import styles from "./App.module.css";
import { useState } from "react";

function App() {
  const [calVal, setcalVal] = useState("");
  const onButtonClick = (buttonText) => {
    if (buttonText === "C") {
    } else if (buttonText === "=") {
    } else {
      const newDisplayValue = calVal + buttonText;
      setcalVal(newDisplayValue);
    }
  };
  return (
    <center>
      <div className={styles.calculator}>
        <Display calVal={calVal}></Display>
        <ButtonContainer onButtonClick={onButtonClick}></ButtonContainer>
      </div>
    </center>
  );
}
export default App;
