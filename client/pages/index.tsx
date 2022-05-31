import type { NextPage } from "next";
import Head from "next/head";
import styled from "styled-components";
import Projects from "../components/Projects/Projects";
import Timelines from "../components/Timeline/Timelines";
import devices from "../styles/devices";

const Main = styled.main`
  display: flex;
  flex-wrap: wrap;
  margin-top: var(--gap);

  @media ${devices.desktop} {
    margin-top: 0;
  }
`;

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Welcome</title>
        <meta
          name="description"
          content="View my portfolio, qualifications, experiences, skills and projects !"
        />

        <meta property="og:title" content="Augustin Sorel - Portfolio" />
        <meta
          property="og:description"
          content="View my portfolio, qualifications, experiences, skills and projects !"
        />
        <meta property="og:url" content="https://augustinsorel.com/" />
        <meta property="og:type" content="website" />

        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main>
        <Timelines />
        <Projects />
        {/* <section id="skills">
          <h1>projects</h1>
        </section> */}
      </Main>
    </>
  );
};

export default Home;
