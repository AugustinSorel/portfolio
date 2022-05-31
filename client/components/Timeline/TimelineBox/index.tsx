import { TimelineContent } from "../../../types/TimelineData";
import * as Styles from "./TimelineBox.styled";

type Props = {
  content: TimelineContent;
};

const TimelineBox = ({ content }: Props) => {
  return (
    <Styles.Container>
      <Styles.Title>{content.title}</Styles.Title>
      <Styles.Location>{content.location}</Styles.Location>

      <Styles.List>
        {content.text.map((text) => (
          <Styles.ListItem
            dangerouslySetInnerHTML={{ __html: text }}
            key={text}
          />
        ))}
      </Styles.List>

      <Styles.Date>{content.date}</Styles.Date>
    </Styles.Container>
  );
};

export default TimelineBox;
