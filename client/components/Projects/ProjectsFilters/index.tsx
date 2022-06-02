import { Categories } from "../../../types/ProjectsData";
import Checkbox from "../../FormElements/Checkbox";
import * as Styles from "./ProjectsFilters.styled";

const ProjectsFilters = () => {
  return (
    <Styles.List>
      {Object.values(Categories).map((category) => (
        <Styles.ListItem key={category}>
          <Checkbox text={category} isActive={false} clickHandler={() => {}} />
        </Styles.ListItem>
      ))}
    </Styles.List>
  );
};

export default ProjectsFilters;
