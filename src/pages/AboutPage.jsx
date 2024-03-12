import Mohdphoto from "../assets/mohamed.png";
import Carophoto from "../assets/caro1.jpg";
import { Link } from "react-router-dom";

export const AboutPage = () => {
  return (
    <div className="about-container">
      <div className="about-text-container">
        <h1>About Us</h1>
        <p>
          Carolina Soto Jurado and Mohamed Abdel Nasser are the 2 best Web
          Development students Ironhack has ever had. Both immigrants from
          exotic, warm, and spicy lands, you can trust them to put the fun in
          function!{" "}
        </p>
        <p> Do !dare to miss any of their projects! </p>
      </div>
      <div className="about-photos-container">
        <img src={Mohdphoto}></img>
        <img src={Carophoto}></img>
        <div className="network-container">
          <a href="https://github.com/mohamed1410">Mohamed's GitHub</a>
          <a href="https://github.com/Caro-isj">Caro's GitHub</a>
          <a href="https://www.linkedin.com/in/caroisj">LinkedIn</a>
        </div>
      </div>
    </div>
  );
};
