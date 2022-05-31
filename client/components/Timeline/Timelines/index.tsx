import useLanguageStore from "../../../store/useLanguageStore";
import timelinesData from "../../../utils/timelineData";
import Timeline from "../Timeline";

const Timelines = () => {
  const { isEnglishSelected } = useLanguageStore();

  return (
    <>
      {timelinesData(isEnglishSelected).map((data) => (
        <Timeline key={data.title} data={data} />
      ))}
    </>
  );
};

export default Timelines;
