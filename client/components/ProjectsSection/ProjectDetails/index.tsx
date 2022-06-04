import * as Styles from "./ProjectDetails.styled";

type Props = {
  category: string;
  date: string;
};

const ProjectDetails = ({ category, date }: Props) => {
  return (
    <Styles.Container>
      <Styles.Category>{category}</Styles.Category>
      <Styles.Date>{date}</Styles.Date>
    </Styles.Container>
  );
};

export default ProjectDetails;
