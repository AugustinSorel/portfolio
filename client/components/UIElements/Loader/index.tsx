import loaderVariants from "../../../framerMotion/LoaderVariants";
import * as Styles from "./Loader.styled";

const Loader = () => {
  return <Styles.Container variants={loaderVariants} animate={"animate"} />;
};

export default Loader;
