import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import projectsData from "../../../utils/ProjectsData";

const ProjectPage = () => {
  return (
    <>
      <Head>
        <title>projects</title>
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

      <div>
        <h1 style={{ color: "red" }}>Project Page</h1>
      </div>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: projectsData(true).map((project) => {
      return {
        params: {
          id: project.title,
        },
      };
    }),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};

export default ProjectPage;
