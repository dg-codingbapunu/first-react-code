function Random() {
  let Number = Math.random() * 100;

  return <h1>random number is {Math.round(Number)}</h1>;
}
export default Random;
