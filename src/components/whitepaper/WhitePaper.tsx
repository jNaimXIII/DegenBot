import "./Whitepaper.scss";
import { motion } from "framer-motion";
import CallToAction from "../hero/CallToAction";

function WhitePaper() {
  return (
    <motion.section
      id="whitepaper"
      className="whitepaper-section"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      exit={{ opacity: 0, y: 30 }}
    >
      <div className="content">
        <h3>
          Check Our <span className="highlighted-text">Whitepaper</span>
        </h3>
        <div className="actions">
          <CallToAction label="Whitepaper" filled fullWidth />
        </div>
      </div>
    </motion.section>
  );
}

export default WhitePaper;
