import React, { useEffect, useRef, useState } from "react";
// @ts-ignore
import NET from "vanta/dist/vanta.net.min";
import * as THREE from "three";

function VantaBackground() {
  const [vantaEffect, setVantaEffect] = useState(null);
  const vantaRef = useRef(null);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        NET({
          el: vantaRef.current,
          THREE: THREE,
          mouseControls: false,
          touchControls: false,
          gyroControls: false,
          minHeight: window.innerHeight,
          minWidth: window.innerWidth,
          scale: 1.0,
          scaleMobile: 1.0,
          backgroundColor: 0x0,
        })
      );
    }
    return () => {
      if (vantaEffect) {
        // @ts-ignore
        vantaEffect.destroy();
      }
    };
  }, [vantaEffect]);

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: -999,
        opacity: 0.2,
      }}
      ref={vantaRef}
    ></div>
  );
}

export default VantaBackground;
