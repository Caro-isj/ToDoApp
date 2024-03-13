import notFoundImg from "../assets/3b4101cb-c114-42d1-8180-5adfed1a983f.png";

import React from "react";

export const NotFoundPage = () => {
  return (
    <div className="notFoundCont">
      <h2>404 - Not Found</h2>
      <p>The page you are looking for does not exist.</p>
      <img src={notFoundImg}></img>
    </div>
  );
};
