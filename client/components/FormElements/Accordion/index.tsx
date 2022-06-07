import { AnimatePresence } from "framer-motion";
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
        <Styles.Title isOpen={isContentOpen}>{title}</Styles.Title>
        <Styles.SvgIconContainer
          whileHover={{ ...scaleUp }}
          whileTap={{ ...scaleDown }}
          animate={{ rotate: isContentOpen ? 180 : 0 }}
        >
          <SvgIcon path="chevron" />
        </Styles.SvgIconContainer>
      </Styles.Header>

      <AnimatePresence initial={false}>
        {isContentOpen && (
          <Styles.ContentContainer
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto" },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{ ease: "easeInOut" }}
          >
            {children}
          </Styles.ContentContainer>
        )}
      </AnimatePresence>
    </Styles.Container>
  );
};

export default Accordion;
