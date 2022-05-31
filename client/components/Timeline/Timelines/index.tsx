import useLanguageStore from "../../../store/useLanguageStore";
import timelinesData from "../../../utils/timelineData";
import Timeline from "../Timeline";
import * as Styles from "./Timelines.styled";

const Timelines = () => {
  const { isEnglishSelected } = useLanguageStore();

  return (
    <Styles.Container>
      {timelinesData(isEnglishSelected).map((data) => (
        <Timeline key={data.title} data={data} />
      ))}
    </Styles.Container>
  );
};

export default Timelines;
