import useFilterStore from "../../../store/useFilterStore";
import { Categories } from "../../../types/ProjectsData";
import Checkbox from "../../FormElements/Checkbox";
import * as Styles from "./ProjectsFilters.styled";

const ProjectsFilters = () => {
  const { categorySelected, setCategorySelected } = useFilterStore();

  return (
    <Styles.List>
      {Object.values(Categories).map((category) => (
        <Styles.ListItem key={category}>
          <Checkbox
            text={category}
            isActive={categorySelected === category}
            clickHandler={() => setCategorySelected(category)}
          />
        </Styles.ListItem>
      ))}
    </Styles.List>
  );
};

export default ProjectsFilters;
