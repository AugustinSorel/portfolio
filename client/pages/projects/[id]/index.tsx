import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import ProjectArticle from "../../../components/Project/ProjectArticle";
import ProjectAside from "../../../components/Project/ProjectAside";
import useLanguageStore from "../../../store/useLanguageStore";
import * as Styles from "../../../styles/ProjectPage.styled";
import { ProjectData } from "../../../types/ProjectsData";
import projectsData from "../../../utils/ProjectsData";

type Props = {
  project: ProjectData;
};

const ProjectPage = ({ project }: Props) => {
  const { isEnglishSelected } = useLanguageStore();

  const [translatedProject, setTranslatedProject] = useState(project);

  useEffect(() => {
    setTranslatedProject(
      projectsData(isEnglishSelected).find(
        (projectddd) => projectddd.id === project.id
      )!
    );
  }, [isEnglishSelected, project.id]);

  return (
    <>
      <Head>
        <title>{`Augustin Sorel - ${translatedProject.title}`}</title>
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
        <ProjectAside project={translatedProject} />

        <ProjectArticle project={translatedProject} />
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
