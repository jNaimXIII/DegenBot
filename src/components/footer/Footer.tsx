import "./Footer.scss";
import { motion } from "framer-motion";

function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      exit={{ opacity: 0, y: 30 }}
      className="site-footer"
    >
      <div className="separator"></div>

      <p>
        Designed & Developed by <a href="https://t.me/ODIN_eth">ODIN</a>
      </p>
    </motion.footer>
  );
}

export default Footer;
