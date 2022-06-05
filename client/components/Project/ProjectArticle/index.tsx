import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ProjectData } from "../../../types/ProjectsData";
import * as Styles from "./ProjectArticle.styled";
import { wrap } from "popmotion";
import { motion } from "framer-motion";
import Button from "../../FormElements/Button";
import SvgIcon from "../../UIElements/SvgIcon";

type Props = {
  project: ProjectData;
};
const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

const variants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
};

const ProjectArticle = ({ project }: Props) => {
  const [[page, direction], setPage] = useState([0, 0]);
  const imageIndex = wrap(0, project.images?.length || 0, page);
  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };
  return (
    <Styles.Article>
      <Styles.Title>{project.title}</Styles.Title>
      {project.images && (
        <Styles.Container>
          <AnimatePresence initial={false} custom={direction}>
            <Styles.Image
              key={page}
              src={project.images[imageIndex]}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              alt={project.title}
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = swipePower(offset.x, velocity.x);

                if (swipe < -swipeConfidenceThreshold) {
                  paginate(1);
                } else if (swipe > swipeConfidenceThreshold) {
                  paginate(-1);
                }
              }}
            />
          </AnimatePresence>

          <Styles.NextButton>
            <Button text="nextImage" onClick={() => paginate(1)}>
              <SvgIcon path="next" />
            </Button>
          </Styles.NextButton>

          <Styles.PreviousButton>
            <Button text="previousImage" onClick={() => paginate(-1)}>
              <SvgIcon path="previous" />
            </Button>
          </Styles.PreviousButton>
        </Styles.Container>
      )}

      <Styles.SmallText>description:</Styles.SmallText>
      <Styles.Description>{project.description}</Styles.Description>

      <Styles.SmallText>all technologies:</Styles.SmallText>
      <Styles.List>
        {project.allTechnologies.map((technology) => (
          <Styles.ListItem key={technology}>
            <Styles.Text>{technology}</Styles.Text>
          </Styles.ListItem>
        ))}
      </Styles.List>
    </Styles.Article>
  );
};

export default ProjectArticle;
