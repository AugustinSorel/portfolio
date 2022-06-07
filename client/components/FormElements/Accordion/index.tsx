import { scaleDown, scaleUp } from "../../../framerMotion/whileVariants";
import SvgIcon from "../../UIElements/SvgIcon";
import * as Styles from "./Accordion.styled";

type Props = {
  children: React.ReactNode;
  title: string;
  isContentOpen: boolean;
  toggleShowContent: () => void;
};

const Accordion = ({
  children,
  title,
  isContentOpen,
  toggleShowContent,
}: Props) => {
  return (
    <Styles.Container>
      <Styles.Header onClick={toggleShowContent}>
        <Styles.Title>{title}</Styles.Title>
        <Styles.SvgIconContainer
          whileHover={{ ...scaleUp }}
          whileTap={{ ...scaleDown }}
          animate={{ rotate: isContentOpen ? 180 : 0 }}
        >
          <SvgIcon path="chevron" />
        </Styles.SvgIconContainer>
      </Styles.Header>

      {isContentOpen && children}
    </Styles.Container>
  );
};

export default Accordion;
