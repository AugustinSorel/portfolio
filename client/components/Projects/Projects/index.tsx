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

      <Styles.ProjectBox>
        <h2>project 1</h2>
      </Styles.ProjectBox>

      <Styles.ProjectBox>
        <h2>project 2</h2>
      </Styles.ProjectBox>

      <Styles.ProjectBox>
        <h2>project 3</h2>
      </Styles.ProjectBox>
    </Styles.Section>
  );
};
export default Projects;
