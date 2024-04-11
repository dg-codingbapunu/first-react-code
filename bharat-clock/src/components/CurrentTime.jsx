let CurrentTime = () => {
  let time = new Date();

  return (
    <p classNameName="lead">
      this is the current time:{time.toLocaleDateString()}-{" "}
      {time.toLocaleTimeString()}
    </p>
  );
};

export default CurrentTime;
