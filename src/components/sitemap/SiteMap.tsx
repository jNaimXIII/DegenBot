import "./SiteMap.scss";
import SiteMapPropImage from "../../assets/images/SiteMapProp.png";
import SocialLinks from "../global/SocialLinks";
import { motion } from "framer-motion";
import CallToAction from "../hero/CallToAction";

function SiteMap() {
  return (
    <section className="sitemap-section">
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        exit={{ opacity: 0, x: -100 }}
        className="content"
      >
        <h3>
          Enhancing
          <br />
          <span>DEX Trading</span>
        </h3>

        <div className="links">
          <SocialLinks />

          <CallToAction label="Whitepaper" filled />
        </div>
      </motion.div>

      <motion.img
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        exit={{ opacity: 0, x: 100 }}
        src={SiteMapPropImage}
        alt=""
        className="sitemap-section-prop-image"
      />
    </section>
  );
}

export default SiteMap;
