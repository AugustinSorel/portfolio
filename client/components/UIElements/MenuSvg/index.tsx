import useNavSideBarStore from "../../../store/useNavSideBarStore";
import * as Styles from "./MenuSvg.styled";

const MenuSvg = () => {
  const { isNavSideBarOpen } = useNavSideBarStore();

  return (
    <Styles.Svg viewBox="0 0 24 24">
      <Styles.Path
        initial={{ d: "M 4 4 L 20 4" }}
        animate={{ d: isNavSideBarOpen ? "M 4 20 L 20 4" : "M 4 4 L 20 4" }}
      />
      <Styles.Path
        d="M 4 12 L 20 12"
        animate={{ opacity: isNavSideBarOpen ? 0 : 1 }}
        transition={{ duration: 0.1 }}
      />

      <Styles.Path
        initial={{ d: "M 4 20 L 20 20" }}
        animate={{ d: isNavSideBarOpen ? "M 4 4 L 20 20" : "M 4 20 L 20 20" }}
      />
    </Styles.Svg>
  );
};

export default MenuSvg;
