import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import Button from "../../FormElements/Button";
import SvgIcon from "../SvgIcon";
import * as Styles from "./Carousel.styled";
import { wrap } from "popmotion";
import carouselVariants from "../../../framerMotion/carouselVariants";

type Props = {
  imagesString: string[];
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

const Carousel = ({ imagesString }: Props) => {
  const [[page, direction], setPage] = useState([0, 0]);
  const imageIndex = wrap(0, imagesString.length, page);
  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  return (
    <Styles.Container>
      <AnimatePresence initial={false} custom={direction}>
        <Styles.Image
          key={page}
          src={imagesString[imageIndex]}
          custom={direction}
          variants={carouselVariants}
          initial="enter"
          animate="center"
          exit="exit"
          alt={`images ${imageIndex}`}
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
  );
};

export default Carousel;
