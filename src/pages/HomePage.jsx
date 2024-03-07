import { Link } from "react-router-dom";
import { ItemDetailsPage } from "./ItemDetailsPage";
import { AboutPage } from "./AboutPage";

const HomePage = ({ items }) => {
  return (
    <div>
      <Link to="/about">About </Link>
      <Link to="/"> Home </Link>
    </div>
  );
};

export default HomePage;
