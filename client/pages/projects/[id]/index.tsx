import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import { ProjectData } from "../../../types/ProjectsData";
import projectsData from "../../../utils/ProjectsData";

type Props = {
  project: ProjectData;
};

const ProjectPage = ({ project }: Props) => {
  return (
    <>
      <Head>
        <title>{`Augustin Sorel - ${project.title}`}</title>
        <meta
          name="description"
          content="View my portfolio, qualifications, experiences, skills and projects !"
        />

        <meta
          property="og:title"
          content={`Augustin Sorel - ${project.title}`}
        />
        <meta
          property="og:description"
          content="View my portfolio, qualifications, experiences, skills and projects !"
        />
        <meta
          property="og:url"
          content={`https://augustin-sorel.com/projects/${project.id}`}
        />
        <meta property="og:type" content="website" />

        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <h1 style={{ color: "red" }}>{project.title}</h1>
        <h1 style={{ color: "red" }}>{project.id}</h1>
        <h1 style={{ color: "red" }}>{project.description}</h1>
        <h1 style={{ color: "red" }}>{project.id}</h1>
        <h1 style={{ color: "red" }}>{project.id}</h1>
        <h1 style={{ color: "red" }}>{project.id}</h1>
      </div>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = () => {
  const paths = projectsData(true).map((project) => {
    return {
      params: {
        id: project.id,
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = (context) => {
  const { id } = context.params!;
  const project = projectsData(true).find((project) => project.id === id);

  return {
    props: {
      project,
    },
  };
};

export default ProjectPage;
