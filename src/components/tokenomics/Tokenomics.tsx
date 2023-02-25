import "./Tokenomics.scss";
import { motion } from "framer-motion";

import TokenomicsPropImage from "../../assets/images/TokenomicsProp.png";
import SectionHeading from "../global/SectionHeading";

function Tokenomics() {
  return (
    <section className="tokenomics-section" id="tokenomics">
      <SectionHeading tag="DegenBot" label="Tokenomics" />

      <motion.h4
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        exit={{ opacity: 0, y: 20 }}
        className="degen-impact-text"
      >
        $Degen
      </motion.h4>

      <div className="info">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          exit={{ opacity: 0, y: 20 }}
        >
          <span className="highlighted-text">Its maximum supply is 10,000,000 tokens</span>
          <br />
          <span>which will be distributed as follows:</span>
        </motion.p>

        <br />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          exit={{ opacity: 0, y: 20 }}
        >
          6,000,000 tokens
          <span className="highlighted-text">
            &nbsp;Initial Liquidity Bootstraping Protocol on Fjord.
          </span>
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          exit={{ opacity: 0, y: 20 }}
        >
          3,000,000 tokens
          <span className="highlighted-text">&nbsp;Initial DEX Liquidity on Uniswap.</span>
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          exit={{ opacity: 0, y: 20 }}
        >
          1,000,000 tokens
          <span className="highlighted-text">&nbsp;Marketing and Development</span>
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          exit={{ opacity: 0, y: 20 }}
          className="small"
        >
          with a 1-year linear vesting schedule and
          <br />
          the first month released on launch.
        </motion.p>

        <br />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          exit={{ opacity: 0, y: 20 }}
        >
          Every buy and sell transaction of
          <span className="highlighted-text"> $DEGEN </span>
          is subject to a<span className="highlighted-text"> 3% tax </span>
          <br />
          which will be distributed as follows:
        </motion.p>

        <br />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          exit={{ opacity: 0, y: 20 }}
        >
          <span className="highlighted-text">1.5% </span>
          to the team.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          exit={{ opacity: 0, y: 20 }}
        >
          <span className="highlighted-text">1.5% </span>
          for future development and continued marketing.
        </motion.p>
      </div>

      <motion.img
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        exit={{ opacity: 0, y: 20 }}
        className="tokenomics-prop-image"
        src={TokenomicsPropImage}
        alt="Tokenomics Prop Image"
      />
    </section>
  );
}

export default Tokenomics;
