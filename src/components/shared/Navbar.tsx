import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <div className="container flex">
          <h1></h1>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="#">Coming</Link>
              </li>
              <li>
                <Link to="#">Coming</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};
