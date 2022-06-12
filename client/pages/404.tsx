import Link from "next/link";
import * as Styles from "../styles/NotFoundPage.styled";

const NotFoundPage = () => {
  return (
    <Styles.Main>
      <Styles.Text>404 - not found</Styles.Text>
      <Link href={"/"}>
        <Styles.Anchor>go back home</Styles.Anchor>
      </Link>
    </Styles.Main>
  );
};

export default NotFoundPage;
