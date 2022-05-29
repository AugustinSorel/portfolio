import Timeline from "../Timeline";
import * as Styles from "./Timelines.styled";

const Timelines = () => {
  return (
    <Styles.Container>
      <Timeline />
      <Timeline />
    </Styles.Container>
  );
};

export default Timelines;
