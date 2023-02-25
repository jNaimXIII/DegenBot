/*
 * modified source code of "react-fast-marquee" by "soumik2012"
 */

import "./Marquee.scss";
import React, { Fragment, useEffect, useRef, useState } from "react";

interface MarqueeProps {
  style?: React.CSSProperties;
  className?: string;
  direction?: "left" | "right";
  speed?: number;
  delay?: number;
  loop?: number;
  children?: React.ReactNode;
}

const Marquee: React.FC<MarqueeProps> = ({
  style = {},
  className = "",
  direction = "left",
  speed = 20,
  delay = 0,
  loop = 0,
  children,
}) => {
  // React Hooks
  const [containerWidth, setContainerWidth] = useState(0);
  const [marqueeWidth, setMarqueeWidth] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const calculateWidth = () => {
      if (marqueeRef.current && containerRef.current) {
        setContainerWidth(containerRef.current.getBoundingClientRect().width);
        setMarqueeWidth(marqueeRef.current.getBoundingClientRect().width);
      }
    };

    calculateWidth();

    window.addEventListener("resize", calculateWidth);
    return () => {
      window.removeEventListener("resize", calculateWidth);
    };
  }, []);

  const duration = marqueeWidth < containerWidth ? containerWidth / speed : marqueeWidth / speed;

  return (
    <Fragment>
      <div
        ref={containerRef}
        style={{
          ...style,
        }}
        className={className + " marquee-container"}
      >
        <div
          ref={marqueeRef}
          style={{
            ["--direction" as string]: direction === "left" ? "normal" : "reverse",
            ["--duration" as string]: `${duration}s`,
            ["--delay" as string]: `${delay}s`,
            ["--iteration-count" as string]: !!loop ? `${loop}` : "infinite",
          }}
          className="marquee"
        >
          {children}
        </div>
        <div
          style={{
            ["--direction" as string]: direction === "left" ? "normal" : "reverse",
            ["--duration" as string]: `${duration}s`,
            ["--delay" as string]: `${delay}s`,
            ["--iteration-count" as string]: !!loop ? `${loop}` : "infinite",
          }}
          className="marquee"
          aria-hidden="true"
        >
          {children}
        </div>
      </div>
    </Fragment>
  );
};

export default Marquee;
