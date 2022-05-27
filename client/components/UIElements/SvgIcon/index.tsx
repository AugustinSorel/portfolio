import paths from "../../../utils/paths";
import * as Styles from "./SvgIcon.styled";

type Props = {
  path: keyof typeof paths;
};

const SvgIcon = ({ path }: Props) => {
  return (
    <Styles.Svg viewBox="0 0 24 24">
      <path d={paths[path]} />
    </Styles.Svg>
  );
};

export default SvgIcon;
