import React from "react";
import "./Home.css";

function Home() {
  return (
    <div className="home-page">
      <div className="home-page-wrapper">
        <div className="home-page-img-wrapper">
          <img
            src="images/isabelle-home-page.png"
            className="home-page-img"
            alt="Isabelle greeting visitors"
          />
        </div>
        <div className="home-page-info">
          <h1 className="home-page-title">WELCOME</h1>
          <p>
            Prepare for a world of Animal Crossing New Horizons information! Get
            detailed data about any item you wish to learn about here.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
