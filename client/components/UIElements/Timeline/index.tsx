import { TimelineData } from "../../../types/TimelineData";
import TimelineBox from "../TimelineBox";
import * as Styles from "./Timeline.styled";

type Props = {
  data: TimelineData;
};

const Timeline = ({ data }: Props) => {
  return (
    <Styles.Section id={data.title}>
      <Styles.Title>{data.title}</Styles.Title>
      {data.content.map((content) => (
        <TimelineBox content={content} />
      ))}
    </Styles.Section>
  );
};

export default Timeline;
