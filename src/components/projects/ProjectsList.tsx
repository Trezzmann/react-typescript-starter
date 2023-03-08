import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Project 1",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    title: "Project 2",
    description:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
];

type projectType = {
  title: string;
  description: string;
};
type projectListProps = {
  projects: { title: string; description: string }[];
};

const ProjectsList = (props: projectListProps) => {
  return (
    <div>
      {props.projects.map((project: projectType) => (
        <ProjectCard title={project.title} description={project.description} />
      ))}
    </div>
  );
};

export default ProjectsList;
