import "./AppBanner.scss";
import { motion } from "framer-motion";

function WhitePaper() {
  return (
    <motion.section
      id="app"
      className="app-section"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      exit={{ opacity: 0, y: 30 }}
    >
      <h3>
        Degen<span className="highlighted-text">Bot</span> App
      </h3>
      <span className="note">(in development phase)</span>
    </motion.section>
  );
}

export default WhitePaper;
