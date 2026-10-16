import React from "react";
import bike from "./bike.jpg";
import "./Home.css";

function Home() {
  return (
    <div
      className="home"
      style={{ backgroundImage: `url(${bike})` }}
    >
      <div className="home-content">
        <h2>Welcome to EMI Calculator</h2>
        <p>Calculate your monthly EMI easily.</p>
      </div>
    </div>
  );
}

export default Home;