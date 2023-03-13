import "./Portal.scss";
import React, { useEffect, useState } from "react";

// Portal and SiteMap uses the same prop image.
import PortalPropImage from "../../assets/images/SiteMapProp.png";
import DegensCarousel from "../global/DegensCarousel";
import CallToAction from "../hero/CallToAction";
import { motion } from "framer-motion";

function Portal(props: React.PropsWithChildren) {
  const [portalState, setPortalState] = useState<"open" | "closed">("closed");
  const [portalElementAnimationProperties, setPortalElementAnimationProperties] = useState({
    beltTop: {
      y: 0 as number | number[],
    },
    beltBottom: {
      y: 0 as number | number[],
    },
    content: {
      opacity: 1,
    },
  });

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const portalQueryParam = urlParams.get("portal");

    if (portalQueryParam === "false") {
      setPortalState("open");
    }
  }, []);

  function handlePortalEnterClick() {
    setPortalElementAnimationProperties((prevState) => ({
      ...prevState,
      beltTop: {
        y: [0, 100, -1000],
      },
      beltBottom: {
        y: [0, -100, 1000],
      },
      content: {
        opacity: 0,
      },
    }));

    setTimeout(() => {
      setPortalState("open");
    }, 600);
  }

  return (
    <>
      {portalState === "closed" && (
        <motion.div
          className="portal"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="belt-top"
            animate={portalElementAnimationProperties.beltTop}
            transition={{ duration: 0.5 }}
          >
            <DegensCarousel rotation={-3} />
          </motion.div>

          <motion.div
            className="content"
            animate={portalElementAnimationProperties.content}
            transition={{ duration: 0.5 }}
          >
            <img className="portal-prop-image" src={PortalPropImage} alt="Portal Prop Image" />

            <div className="actions">
              <CallToAction
                label="Enter"
                filled
                onClick={handlePortalEnterClick}
                fullWidth
                compact
              />
            </div>
          </motion.div>

          <motion.div
            className="belt-bottom"
            animate={portalElementAnimationProperties.beltBottom}
            transition={{ duration: 0.5 }}
          >
            <DegensCarousel rotation={-3} direction="right" />
          </motion.div>
        </motion.div>
      )}

      {portalState === "open" && props.children}
    </>
  );
}

export default Portal;
