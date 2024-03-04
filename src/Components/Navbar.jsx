import LogoComponent from "./Logo";

const Navbar = ({ logoImage, text }) => {
  console.log("the props we sent");

  return (
    <>
      <LogoComponent logoImage={logoImage} text={text} />

      <h1>To Do List</h1>
    </>
  );
};
export default Navbar;
