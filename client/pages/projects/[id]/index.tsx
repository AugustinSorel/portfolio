import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import ProjectArticle from "../../../components/Project/ProjectArticle";
import ProjectAside from "../../../components/Project/ProjectAside";
import * as Styles from "../../../styles/ProjectPage.styled";
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
        <meta name="description" content={project.description} />
        <meta
          property="og:title"
          content={`Augustin Sorel - ${project.title}`}
        />
        <meta property="og:description" content={project.description} />
        <meta
          property="og:url"
          content={`https://augustin-sorel.com/projects/${project.title}`}
        />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Styles.Main>
        <ProjectAside project={project} />

        <ProjectArticle project={project} />
      </Styles.Main>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = () => {
  const pathsEnglish = projectsData(true).map((project) => {
    return {
      params: {
        id: project.title,
      },
    };
  });

  const pathsFrench = projectsData(false).map((project) => {
    return {
      params: {
        id: project.title,
      },
    };
  });

  const paths = [...pathsEnglish, ...pathsFrench];

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = (context) => {
  const { id: title } = context.params!;
  const allProjects = Array.from(
    new Set([...projectsData(true), ...projectsData(false)])
  );

  const project = allProjects.find((project) => project.title === title);

  return {
    props: {
      project,
    },
  };
};

export default ProjectPage;
