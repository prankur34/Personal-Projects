import React from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import Blogs from "./Pages/Blogs";
import Resume from "./Pages/Resume";
import Projects from "./Pages/Projects";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" exact element={<Homepage />} />
        <Route path="/projects" exact element={<Projects />} />
        <Route path="/blogs" exact element={<Blogs />} />{" "}
        <Route path="/resume" exact element={<Resume />} />
      </Routes>
    </div>
  );
}

export default App;
