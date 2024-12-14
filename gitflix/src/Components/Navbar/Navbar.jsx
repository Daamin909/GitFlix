import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <svg
          width="150"
          height="40"
          viewBox="0 0 150 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M27.4 20.7C27.4 24.3 24.5 27.2 20.9 27.2C17.3 27.2 14.4 24.3 14.4 20.7C14.4 17.1 17.3 14.2 20.9 14.2C24.5 14.2 27.4 17.1 27.4 20.7Z"
            fill="#E50914"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M20.9 15.7C18.1 15.7 15.9 17.9 15.9 20.7C15.9 23.5 18.1 25.7 20.9 25.7C23.7 25.7 25.9 23.5 25.9 20.7C25.9 17.9 23.7 15.7 20.9 15.7ZM14.4 20.7C14.4 17.1 17.3 14.2 20.9 14.2C24.5 14.2 27.4 17.1 27.4 20.7C27.4 24.3 24.5 27.2 20.9 27.2C17.3 27.2 14.4 24.3 14.4 20.7Z"
            fill="#E50914"
          />
          <path
            d="M20.9 22.7C22 22.7 23 21.8 23 20.7C23 19.6 22 18.7 20.9 18.7C19.8 18.7 18.8 19.6 18.8 20.7C18.8 21.8 19.8 22.7 20.9 22.7Z"
            fill="#E50914"
          />
          <span> </span>
          <text
            x="35"
            y="30"
            fontSize="30"
            fontWeight="bold"
            fill="#E50914"
            fontFamily="Arial"
          >
            GITFLIX
          </text>
        </svg>
      </div>
      <div className="navbar-tagline">
        <div className="tag-text">
          <span style={{ color: "red" }}>B</span>
          <span style={{ color: "orange" }}>I</span>
          <span style={{ color: "yellow" }}>N</span>
          <span style={{ color: "yellowgreen" }}>G</span>
          <span style={{ color: "#f9f9f9" }}>E</span>
          <span> </span>
          <span style={{ color: "violet" }}>R</span>
          <span style={{ color: "red" }}>E</span>
          <span style={{ color: "orange" }}>P</span>
          <span style={{ color: "yellow" }}>O</span>
          <span style={{ color: "yellowgreen" }}>S</span>
          <span style={{ color: "#f9f9f9" }}>I</span>
          <span style={{ color: "lime" }}>T</span>
          <span style={{ color: "violet" }}>O</span>
          <span style={{ color: "red" }}>R</span>
          <span style={{ color: "orange" }}>I</span>
          <span style={{ color: "yellow" }}>E</span>
          <span style={{ color: "yellowgreen" }}>S</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

