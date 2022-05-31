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
          <Styles.ProjectTitle>project one</Styles.ProjectTitle>
          <Styles.ProjectDescription>
            tech one <br />
            tech two <br />
            tech three <br />
            tech four <br />
            tech four <br />
            tech four <br />
          </Styles.ProjectDescription>
        </Styles.ProjectsListItem>
        <Styles.ProjectsListItem>
          <Styles.ProjectTitle>project one</Styles.ProjectTitle>
          <Styles.ProjectDescription>
            tech one <br />
            tech two <br />
            tech three <br />
            tech three <br />
            tech four <br />
          </Styles.ProjectDescription>
        </Styles.ProjectsListItem>
        <Styles.ProjectsListItem>
          <Styles.ProjectTitle>project one</Styles.ProjectTitle>
          <Styles.ProjectDescription>
            tech one <br />
            tech two <br />
            tech three <br />
            tech three <br />
          </Styles.ProjectDescription>
        </Styles.ProjectsListItem>
        <Styles.ProjectsListItem>
          <Styles.ProjectTitle>project one</Styles.ProjectTitle>
          <Styles.ProjectDescription>
            tech one <br />
            tech one <br />
            tech four <br />
          </Styles.ProjectDescription>
        </Styles.ProjectsListItem>
      </Styles.ProjectsList>
    </Styles.Section>
  );
};
export default Projects;
