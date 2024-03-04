const Logo = (props) => {
  const text = props.text || "our todo list";
  return (
    <>
      <img src={props.logoImage} className="App-logo" alt="logo" />
      <h6>Hello World</h6>
    </>
  );
};

export default Logo;
