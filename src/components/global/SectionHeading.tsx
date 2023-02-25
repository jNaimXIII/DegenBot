import "./SectionHeading.scss";
import { motion } from "framer-motion";

type SectionHeadingProps = {
  tag: string;
  label: string;
};

function SectionHeading(props: SectionHeadingProps) {
  return (
    <motion.h3
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      exit={{ opacity: 0, y: 20 }}
      className="section-heading"
    >
      <span className="highlighted-text">{props.tag}</span>
      <span className="section-name">{props.label}</span>
    </motion.h3>
  );
}

export default SectionHeading;
