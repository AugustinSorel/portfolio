import Checkbox from "../../FormElements/Checkbox";
import * as Styles from "./Projects.styled";

const Projects = () => {
  return (
    <Styles.Section id="projects">
      <Styles.FilterList>
        <Styles.FilterListItem>
          <Checkbox text="fullstack" isActive={false} clickHandler={() => {}} />
        </Styles.FilterListItem>
        <Styles.FilterListItem>
          <Checkbox text="frontend" isActive={false} clickHandler={() => {}} />
        </Styles.FilterListItem>
        <Styles.FilterListItem>
          <Checkbox text="c#" isActive={false} clickHandler={() => {}} />
        </Styles.FilterListItem>
      </Styles.FilterList>

      <Styles.ProjectsList>
        <Styles.ProjectsListItem>
          <h1>project one</h1>
          <h2>tech one</h2>
          <h2>tech one</h2>
          <h2>tech one</h2>
        </Styles.ProjectsListItem>
        <Styles.ProjectsListItem>
          <h1>project one</h1>
          <h2>tech one</h2>
          <h2>tech one</h2>
        </Styles.ProjectsListItem>
        <Styles.ProjectsListItem>
          <h1>project one</h1>
          <h2>tech one</h2>
          <h2>tech one</h2>
        </Styles.ProjectsListItem>
        <Styles.ProjectsListItem>
          <h1>project one</h1>
          <h2>tech one</h2>
          <h2>tech one</h2>
        </Styles.ProjectsListItem>
      </Styles.ProjectsList>
    </Styles.Section>
  );
};
export default Projects;
