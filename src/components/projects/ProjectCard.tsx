type projectTitleProps = {
  children: string;
};
type projectDescriptionProps = {
  children: string;
};
type projectCardProps = {
  title: string;
  description: string;
};

const ProjectTitle = (props: projectTitleProps) => {
  return <h2>{props.children}</h2>;
};
const ProjectDescription = (props: projectDescriptionProps) => {
  return <p>{props.children}</p>;
};

const ProjectCard = (props: projectCardProps) => {
  return (
    <div className="project">
      <ProjectTitle>{props.title}</ProjectTitle>
      <ProjectDescription>{props.description}</ProjectDescription>
    </div>
  );
};

export default ProjectCard;
