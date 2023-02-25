import "./Apps.scss";
import AppsPropImage from "../../assets/images/AppsProp.png";
import AppStoreLogo from "../../assets/images/AppStoreLogo.png";
import PlayStoreLogo from "../../assets/images/PlayStoreLogo.png";
import { motion } from "framer-motion";

function Apps() {
  return (
    <section className="apps-section" id="app">
      <motion.div
        className="content"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        exit={{ opacity: 0, x: -100 }}
      >
        <div className="content-section">
          <h3>First all-in-one Mobile Bot</h3>
          <p>
            Degen Bot is a platform designed specifically for the trading community, providing a
            range of features such as instant buy options and copy trader functionalities.
          </p>

          <p>
            The ultimate goal is to develop an all-in-one application for crypto trading that is as
            comprehensive as the desktop version. Recognizing the always open crypto market, Degen
            Bot aims to provide traders with a fast and convenient way to trade from anywhere. To
            this end, the company is currently developing its own Android/iOS app with the intention
            of revolutionizing the trading experience for users.
          </p>
        </div>

        <div className="content-section">
          <h3>Coming Soon</h3>

          <div className="store-links">
            <button>
              <img src={PlayStoreLogo} alt="Play Store Image" />
            </button>

            <button>
              <img src={AppStoreLogo} alt="App Store Image" />
            </button>
          </div>
        </div>
      </motion.div>

      <motion.img
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        exit={{ opacity: 0, x: 100 }}
        src={AppsPropImage}
        alt="Apps Prop Image"
        className="apps-prop-image"
      />
    </section>
  );
}

export default Apps;
