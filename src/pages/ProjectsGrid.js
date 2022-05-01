import React from "react";
import ProjectItem from "../projects/ProjectItem";

const ProjectsGrid = ({ items, isLoading }) => {
  return isLoading ? (
    <h1>Loading...</h1>
  ) : (
    <section className="cards">
      {items.map(item => (
        <ProjectItem key={item.char_id} item={item}></ProjectItem>
      ))}
    </section>
  );
};

export default ProjectsGrid;
