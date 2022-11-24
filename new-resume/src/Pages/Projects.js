import axios from "axios";
import React, { useEffect, useState } from "react";
import Footer from "../Component/Footer";
import Header from "../Component/Header";
import Project from "../Component/Project";
function Projects() {
  const [projects, setProjects] = useState([]);
  console.log("🚀 ~ file: Blogs.js ~ line 6 ~ Blogs ~ blogs", projects);

  async function fetchProjects() {
    try {
      const projects = await axios.get(
        "https://api.github.com/users/prankur34/repos"
      );

      setProjects(projects.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchProjects();
  }, []);
  return (
    <div>
      {" "}
      <Header />
      <div className="flex w-full flex-wrap justify-center items-center text-gray-400 bg-gray-900 body-font">
        {projects
          .filter((f) => f.name.includes("Slate"))

          .map((project) => {
            return <Project project={project} />;
          })}
      </div>
      <Footer />
    </div>
  );
}

export default Projects;
