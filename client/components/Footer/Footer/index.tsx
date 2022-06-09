import FooterAside from "../FooterAside";
import FooterForm from "../FooterForm/inedx";
import * as Styles from "./Footer.styled";

const Footer = () => {
  return (
    <Styles.Footer id="contact">
      <FooterAside />
      <FooterForm />
    </Styles.Footer>
  );
};

export default Footer;
