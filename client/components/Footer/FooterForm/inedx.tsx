import * as Styles from "./FooterForm.styled";

const FooterForm = () => {
  return (
    <Styles.Container>
      <Styles.Text>contact me</Styles.Text>
      <Styles.Form>
        <input type="email" placeholder="email@email.com" />
        <input type="text" placeholder="object" />
        <textarea placeholder="your message"></textarea>
      </Styles.Form>
    </Styles.Container>
  );
};

export default FooterForm;
