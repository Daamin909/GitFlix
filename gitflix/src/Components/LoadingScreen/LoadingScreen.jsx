import React from "react";
import "./LoadingScreen.css";

const LoadingScreen = () => {
  return (
    <div className="loading-screen">
      <div className="invertocat"></div>
      <p>Fetching repositories...</p>
    </div>
  );
};

export default LoadingScreen;
