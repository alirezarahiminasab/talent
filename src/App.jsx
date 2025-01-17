import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Switch is replaced with Routes
import Cover from "./pages/Cover";
import MainTitles from "./pages/MainTitles";
import Subtitles from "./pages/Subtitles";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Cover />} />{" "}
        <Route path="/titles" element={<MainTitles />} />
        <Route path="/titles/:id" element={<Subtitles />} />
      </Routes>
    </Router>
  );
};

export default App;
