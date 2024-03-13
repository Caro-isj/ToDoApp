import Mohdphoto from "../assets/mohamed.png";
import Carophoto from "../assets/caro1.jpg";
import { Link } from "react-router-dom";
import GithubLogo from "../assets/github.png";

export const AboutPage = () => {
  return (
    <div className="about-container">
      <div className="about-text-container">
        <h2>About Us</h2>
        <p>
          Mohamed Abdel Nasser and Carolina Soto Jurado are the two best Web
          Development students Ironhack has ever had. Both immigrants from
          exotic, warm, and spicy lands, you can trust them to put the fun in
          function!
        </p>
        <p>
          {" "}
          Don't miss any of their projects! Check out their GitHub profiles:{" "}
        </p>
      </div>
      <div className="about-photos-container">
        <Link to="https://github.com/mohamed1410">
          <img src={Mohdphoto}></img>
        </Link>
        <Link to="https://github.com/Caro-isj">
          <img src={Carophoto}></img>
        </Link>
      </div>
      <div className="network-container"></div>
    </div>
  );
};
