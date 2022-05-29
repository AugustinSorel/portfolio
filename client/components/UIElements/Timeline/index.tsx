import * as Styles from "./Timeline.styled";

type Props = {};

const Timeline = (props: Props) => {
  return (
    <Styles.Section>
      <Styles.Title>Qualifications</Styles.Title>

      <Styles.Box>
        <Styles.BoxTitle>bsc</Styles.BoxTitle>
        <Styles.BoxLocation>leicester - university</Styles.BoxLocation>

        <Styles.BoxText>
          Computer Architecture: <strong>96%</strong>
          <br />
          Discrete Mathematic: <strong>93%</strong>
          <br />
          Advenced Programming: <strong>90%</strong>
        </Styles.BoxText>

        <Styles.BoxDate>2021 -</Styles.BoxDate>
      </Styles.Box>
      <Styles.Box>
        <Styles.BoxTitle>bsc</Styles.BoxTitle>
        <Styles.BoxLocation>leicester - university</Styles.BoxLocation>

        <Styles.BoxText>
          Computer Architecture: <strong>96%</strong>
          <br />
          Discrete Mathematic: <strong>93%</strong>
          <br />
          Advenced Programming: <strong>90%</strong>
        </Styles.BoxText>

        <Styles.BoxDate>2021 -</Styles.BoxDate>
      </Styles.Box>
      <Styles.Box>
        <Styles.BoxTitle>bsc</Styles.BoxTitle>
        <Styles.BoxLocation>leicester - university</Styles.BoxLocation>

        <Styles.BoxText>
          Computer Architecture: <strong>96%</strong>
          <br />
          Discrete Mathematic: <strong>93%</strong>
          <br />
          Advenced Programming: <strong>90%</strong>
        </Styles.BoxText>

        <Styles.BoxDate>2021 -</Styles.BoxDate>
      </Styles.Box>
    </Styles.Section>
  );
};

export default Timeline;
