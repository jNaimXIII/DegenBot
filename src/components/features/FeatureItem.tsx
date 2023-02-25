import React from "react";
import "./FeatureItem.scss";
import { motion } from "framer-motion";

type FeatureItemProps = {
  label: string[];
  highlightedIndex: number;
  description: string;
  propImage: string;
  inverted?: boolean;
  lineBreak?: boolean;
};

function FeatureItem(props: FeatureItemProps) {
  return (
    <article
      className={`
        feature-item
        ${props.inverted ? "inverted" : ""}
      `}
    >
      <motion.div
        initial={{ opacity: 0, x: props.inverted ? 100 : -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        exit={{ opacity: 0, x: props.inverted ? 100 : -100 }}
        className="content"
      >
        <h4>
          {props.label.map((label, index, arr) => {
            return (
              <React.Fragment key={index}>
                <span
                  className={`
                    ${index === props.highlightedIndex ? "highlighted-text" : ""}
                  `}
                >
                  {label}
                </span>
                {props.lineBreak && index !== arr.length - 1 && <br />}
              </React.Fragment>
            );
          })}
        </h4>

        <p>{props.description}</p>
      </motion.div>

      <motion.img
        initial={{ opacity: 0, x: props.inverted ? -100 : 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        exit={{ opacity: 0, x: props.inverted ? -100 : 100 }}
        className="feature-item-prop-image"
        src={props.propImage}
        alt="Feature Prop"
      />
    </article>
  );
}

export default FeatureItem;
