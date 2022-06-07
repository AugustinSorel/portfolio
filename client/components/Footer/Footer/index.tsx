import * as Styles from "./Footer.styled";

type Props = {};

const Footer = (props: Props) => {
  return (
    <Styles.Footer>
      <Styles.Aside>
        <h3>hello</h3>
      </Styles.Aside>
      <Styles.Form>world</Styles.Form>
    </Styles.Footer>
  );
};

export default Footer;
