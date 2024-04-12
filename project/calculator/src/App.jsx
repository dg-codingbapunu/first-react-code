import Display from "./component/Display";
import ButtonContainer from "./component/ButtonContainer";
import styles from "./App.module.css";

function App() {
  return (
    <center>
      <div className={styles.calculator}>
        <Display></Display>
        <ButtonContainer></ButtonContainer>
      </div>
    </center>
  );
}
export default App;
