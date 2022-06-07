import * as Styles from "./ProjectDetails.styled";

type Props = {
  category: string;
  date: string;
};

const ProjectDetails = ({ category, date }: Props) => {
  return (
    <Styles.Container>
      <Styles.Category layout>{category}</Styles.Category>
      <Styles.Date layout>{date}</Styles.Date>
    </Styles.Container>
  );
};

export default ProjectDetails;
