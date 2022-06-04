import { Links } from "../../../types/ProjectsData";
import paths from "../../../utils/paths";
import SvgIcon from "../../UIElements/SvgIcon";
import * as Styles from "./ProjectLinks.styled";

type Props = {
  links: Links;
};

const ProjectLinks = ({ links }: Props) => {
  return (
    <Styles.List>
      {Object.values(links).map((link, index) => (
        <Styles.Anchor href={link} key={link} target={"_blank"}>
          <SvgIcon path={Object.keys(links)[index] as keyof typeof paths} />
        </Styles.Anchor>
      ))}
    </Styles.List>
  );
};

export default ProjectLinks;
