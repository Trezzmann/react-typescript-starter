type projectPageProps = {
  children: React.ReactNode;
};

const ProjectWrapper = (props: projectPageProps) => {
  return <div className="projects">{props.children}</div>;
};

export default ProjectWrapper;
