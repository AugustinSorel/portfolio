import * as Styles from "./FooterAside.styled";

const FooterAside = () => {
  return (
    <Styles.Aside>
      <Styles.Anchor href="https://github.com/AugustinSorel" target={"_blank"}>
        github
      </Styles.Anchor>
      <Styles.Anchor
        href="https://www.youtube.com/channel/UCM_FdTMwVrJyhk6nvzWaLig"
        target={"_blank"}
      >
        youtube
      </Styles.Anchor>
      <Styles.Anchor href="https://bzh.com" target={"_blank"}>
        <strong>
          <em>cv</em>
        </strong>
      </Styles.Anchor>
    </Styles.Aside>
  );
};

export default FooterAside;
