import * as Styles from "./Header.styled";

const Header = () => {
  return (
    <Styles.Header>
      <Styles.TopContainer>
        <Styles.Box>1</Styles.Box>
        <Styles.Box>2</Styles.Box>
        <Styles.Box>3</Styles.Box>
      </Styles.TopContainer>

      <Styles.BottomContainer>
        <Styles.Title>Augustin sorel</Styles.Title>
        <Styles.Box>4</Styles.Box>
        <Styles.Paragraph>
          2wjdijiwejd duwehduwehdu weudh wehduweduwe whedhwue wdhwued wed
        </Styles.Paragraph>
      </Styles.BottomContainer>
    </Styles.Header>
  );
};

export default Header;
