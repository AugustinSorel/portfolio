import type { NextPage } from "next";
import Head from "next/head";
import Timelines from "../components/Timeline/Timelines";

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

      <main>
        <Timelines />
        <section id="projects">
          <h1>projects</h1>
        </section>
        <section id="skills">
          <h1>projects</h1>
        </section>
      </main>
    </>
  );
};

export default Home;
