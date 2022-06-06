import useFilterStore from "../../../store/useFilterStore";
import { Categories } from "../../../types/ProjectsData";
import Checkbox from "../../FormElements/Checkbox";
import * as Styles from "./ProjectsFilters.styled";

const ProjectsFilters = () => {
  const { categorySelected, setCategorySelected } = useFilterStore();

  return (
    <Styles.Container>
      {Object.values(Categories).map((category) => (
        <Checkbox
          key={category}
          text={category}
          isActive={categorySelected === category}
          clickHandler={() => setCategorySelected(category)}
        />
      ))}
    </Styles.Container>
  );
};

export default ProjectsFilters;
