import "./DegensCarousel.scss";
import { motion } from "framer-motion";
import Marquee from "./Marquee";

type DegensCarouselProps = {
  rotation: number;
  direction?: "left" | "right";
};

function DegensCarousel(props: DegensCarouselProps) {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      style={{
        transform: `rotate(${props.rotation}deg)`,
      }}
      className="degens-carousel-section"
    >
      <Marquee speed={75} direction={props.direction ?? "left"}>
        <DegensCarouselItems />
      </Marquee>
    </motion.section>
  );
}

export default DegensCarousel;

function DegensCarouselItems() {
  return (
    <>
      {Array.from(Array(16).keys()).map((item) => (
        <span key={item} className="degens-text">
          We Are <span className="highlighted-text">Degens</span>
        </span>
      ))}
    </>
  );
}
