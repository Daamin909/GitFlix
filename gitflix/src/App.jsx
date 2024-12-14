import React, { useState, useEffect } from "react";
import Navbar from "./Components/Navbar/Navbar";
import SpinButton from "./Components/SpinButton/SpinButton";
import LoadingScreen from "./Components/LoadingScreen/LoadingScreen";
import Wall from "./Components/Wall/Wall";
import "./App.css";
import { fetchRepoInfo } from "./Utils/backend";

const App = () => {
  const [loading, setLoading] = useState(false);
  const [repoData, setRepoData] = useState(null);

  const fetchRandomRepo = async () => {
    setLoading(true);
    try {
      const repoInfo = await fetchRepoInfo();
      setRepoData(repoInfo);
    } catch (error) {
      alert("Error 404. Couldn't Connect To Server!");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (repoData) {
      const blocks = document.querySelectorAll(".repo-block");
      blocks.forEach((block, index) => {
        block.style.animationDelay = `${index * 0.1}s`;
      });
    }
  }, [repoData]);

  return (
    <div className="app">
      <Navbar />
      <main>
        {!loading && !repoData && <SpinButton onSpin={fetchRandomRepo} />}
        {loading && <LoadingScreen />}
        {!loading && repoData && <Wall repoData={repoData.repo_info} />}
      </main>
    </div>
  );
};

export default App;
