import { useState } from "react";
import SvgIcon from "../../UIElements/SvgIcon";
import Button from "../Button";
import * as Styles from "./Accordion.styled";

type Props = {
  children: React.ReactNode;
  title: string;
};

const Accordion = ({ children, title }: Props) => {
  const [showContent, setShowContent] = useState(false);

  return (
    <Styles.Container>
      <Styles.Header>
        <Styles.Title>{title}</Styles.Title>
        <Button
          text={`${title} chevron`}
          onClick={() => {
            setShowContent((prevState) => !prevState);
          }}
        >
          <Styles.SvgIconContainer animate={{ rotate: showContent ? 180 : 0 }}>
            <SvgIcon path="chevron" />
          </Styles.SvgIconContainer>
        </Button>
      </Styles.Header>

      {showContent && children}
    </Styles.Container>
  );
};

export default Accordion;
