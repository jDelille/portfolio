import React, { useRef, useEffect } from "react";
import "./Transition.scss";
import gsap, {Power4} from "gsap";
import anime from 'animejs'
function Reverse({ timeline }) {
  const trans2 = useRef(null);
  const trans3 = useRef(null)
  useEffect(() =>{
   timeline.from(trans2.current, {
    duration: 0,
    x: 2000,
    ease: Power4.easeOut
   })
   timeline.from(trans3.current, {
    duration: 1.5,
    x: 2000,
    ease: Power4.easeOut
   })
   timeline.to(trans2.current, {
    duration: 0,
    x: -2000,
    ease: Power4.easeOut
   })
   timeline.to(trans3.current, {
    duration: 2,
    x: -2000,
    ease: Power4.easeOut
   })
   
  })
  useEffect(() =>{
  
  })

 




  return (
    <div>
     <div className="transition-effect-first" ref={trans2}>
      
     </div>
      <div className="transition-effect" ref={trans3}>
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

export default Reverse;
