import { Technologies } from "../../../types/ProjectsData";
import * as Styles from "./ProjectList.styled";

type Props = {
  iterator: Technologies[] | string[];
};

const ProjectList = ({ iterator }: Props) => {
  return (
    <Styles.List>
      {iterator.map((item) => (
        <Styles.ListItem key={item}>{item}</Styles.ListItem>
      ))}
    </Styles.List>
  );
};

export default ProjectList;
