import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import "./HeroImage.css";

export default function HeroImage() {
  const [active, setActive] = useState(false);
  const isTouchDevice = useRef(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    isTouchDevice.current =
      typeof window !== "undefined" &&
      window.matchMedia("(hover: none)").matches;
  }, []);

  const handleEnter = () => {
    if (!isTouchDevice.current) setActive(true);
  };
  const handleLeave = () => {
    if (!isTouchDevice.current) setActive(false);
  };
  const handleFocus = () => setActive(true);
  const handleBlur = () => setActive(false);
  const handleClick = () => {
    if (isTouchDevice.current) setActive((v) => !v);
  };

  return (
    <motion.div
      className="hero-image"
      initial={reduceMotion ? { opacity: 1 } : { opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.1, ease: "easeOut", delay: 0.2 }}
    >
      <button
        type="button"
        className={`hero-image__frame ${active ? "is-active" : ""}`}
        onMouseEnter={handleEnter}
        onMouseLeave={handleLeave}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onClick={handleClick}
        aria-pressed={active}
        aria-label="Character portrait. Hover, focus, or tap to see the alternate pose."
      >
        <span className="hero-image__glow" aria-hidden="true" />
        <img
          src="/images/hero-default.png"
          alt="Character portrait, default pose"
          className="hero-image__img hero-image__img--default"
        />
        <img
          src="/images/hero-hover.png"
          alt=""
          aria-hidden="true"
          className="hero-image__img hero-image__img--hover"
        />
      </button>
    </motion.div>
  );
}
