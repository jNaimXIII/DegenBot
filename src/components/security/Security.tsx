import "./Security.scss";

import SectionHeading from "../global/SectionHeading";

import SecurityPropImage from "../../assets/images/SecurityProp.png";
import CallToAction from "../hero/CallToAction";
import { motion } from "framer-motion";

function Security() {
  return (
    <section className="security-section" id="security">
      <SectionHeading tag="Security" label="Safe & Secure" />

      <motion.img
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="security-prop-image"
        src={SecurityPropImage}
        alt="Security Prop"
      />

      <div className="content">
        <motion.h4
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          100% SAFU and KYC by XYZ
        </motion.h4>

        <div className="info">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            We at DegenBot want to make sure that your investment is safe and secured in every way.
            That's why we chose to work with one of the best audit companies in the crypto industry
            called “Contract Checker supported by XYZ”
          </motion.p>

          <br />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            This audit proves that we have a professionally written contract that is 100% safe
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="actions"
        >
          <CallToAction label="View Audit" filled fullWidth />
        </motion.div>
      </div>
    </section>
  );
}

export default Security;
