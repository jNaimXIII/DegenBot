import "./Hero.scss";
import HeroPropImage from "../../assets/images/HeroProp.png";
import CallToAction from "./CallToAction";
import { motion } from "framer-motion";
import SocialLinks from "../global/SocialLinks";

function Hero() {
  return (
    <section className="hero-section" id="home">
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        exit={{ opacity: 0, x: -100 }}
        className="content"
      >
        <h1>
          ENHANCING
          <br />
          <span className="text-highlighted">DEX TRADING</span>
        </h1>

        <p>
          At Degen Bot, we offer a customized trading bot and contract sniper to give you a
          competitive edge. Our tools are designed to cater to traders of all experience levels,
          ensuring a level playing field in the market.
        </p>

        <div className="hero-actions">
          <CallToAction label="Buy Now" filled />
          <CallToAction label="View Contract" />
        </div>

        <div className="social-links">
          <SocialLinks />
        </div>
      </motion.div>

      <motion.img
        animate={{ y: [0, -20, 0] }}
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{
          y: {
            duration: 3.5,
            ease: "easeInOut",
            repeat: Infinity,
          },
        }}
        exit={{ opacity: 0, x: 100 }}
        className="hero-prop-image"
        src={HeroPropImage}
        alt="Hero Prop"
      />
    </section>
  );
}

export default Hero;
