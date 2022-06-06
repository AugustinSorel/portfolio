import * as Styles from "./ProjectLabelDescription.styled";

type Props = {
  text: string;
};

const ProjectLabelDescription = ({ text }: Props) => {
  return <Styles.Text>{text}:</Styles.Text>;
};

export default ProjectLabelDescription;
