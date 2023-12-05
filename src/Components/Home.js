import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Home.css";

const Home = ({ text, onRoute }) => {
  let location = useLocation();
  useEffect(() => {
    onRoute("home");
  }, [location.pathname, onRoute]);

  return (
    <div className="homepage_container">
      <div className="text-div">
        <h1>
          Welcome to Chopify<br></br>
          <span>A creation of B-Alpha</span>
        </h1>
        <p>This is where your dream of perfect shoe is made true</p>
        <Link to="/products" state={{ some: "value" }}>
          <input type="submit" value={text} />
        </Link>
      </div>
    </div>
  );
};

export default Home;
