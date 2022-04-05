import React, { useRef, useEffect } from "react";
import "./Transition.scss";
import gsap, { Power4 } from "gsap";
import anime from "animejs";
function Transition({ timeline }) {
  const trans = useRef(null);
  const trans1 = useRef(null);
  useEffect(() => {
    timeline.from(trans1.current, {
      duration: 0,
      x: -2000,
      ease: Power4.easeOut,
    });
    timeline.from(trans.current, {
      duration: 1.5,
      x: -2000,
      ease: Power4.easeOut,
    });
    timeline.to(trans1.current, {
      duration: 0.3,
      x: 2000,
      ease: Power4.easeOut,
    });
    timeline.to(trans.current, {
      duration: 2,
      x: 2000,
      ease: Power4.easeOut,
    });
  });
  useEffect(() => {});

  return (
    <div>
      <div className="transition-effect-first" ref={trans1}></div>
      <div className="transition-effect" ref={trans}>
        {/* <div className="loader">
  
       </div> */}
        <div className="loader-content">
          <svg id="page-loader">
            <circle cx="75" cy="75" r="20" />
            <circle cx="75" cy="75" r="35" />
            <circle cx="75" cy="75" r="50" />
            <circle cx="75" cy="75" r="65" />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default Transition;
