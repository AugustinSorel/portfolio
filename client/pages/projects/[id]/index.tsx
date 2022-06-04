import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import Button from "../../../components/FormElements/Button";
import ProjectAside from "../../../components/Project/ProjectAside";
import SvgIcon from "../../../components/UIElements/SvgIcon";
import * as Styles from "../../../styles/ProjectPage.styled";
import { ProjectData } from "../../../types/ProjectsData";
import paths from "../../../utils/paths";
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
          content={`https://augustin-sorel.com/projects/${project.id}`}
        />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Styles.Main>
        <ProjectAside project={project} />

        <Styles.Article>
          <h1>{project.title}</h1>
        </Styles.Article>
      </Styles.Main>
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
