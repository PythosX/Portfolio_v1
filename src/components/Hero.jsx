import { motion, useReducedMotion } from "framer-motion";
import HeroImage from "./HeroImage.jsx";
import "./Hero.css";

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

export default function Hero() {
  const reduceMotion = useReducedMotion();

  const variants = reduceMotion
    ? { hidden: { opacity: 1, y: 0 }, visible: { opacity: 1, y: 0 } }
    : item;
  const groupVariants = reduceMotion ? { hidden: {}, visible: {} } : container;

  return (
    <section className="hero">
      <div className="hero__glow" aria-hidden="true" />

      <div className="hero__grid container">
        <motion.div
          className="hero__left"
          initial="hidden"
          animate="visible"
          variants={groupVariants}
        >
          <motion.p className="hero__label" variants={variants}>
            Creative developer, portfolio 2026
          </motion.p>
          <motion.h1 className="hero__heading" variants={variants}>
            Building interfaces
            <br />
            with weight and light
          </motion.h1>
        </motion.div>

        <div className="hero__center">
          <HeroImage />
        </div>

        <motion.div
          className="hero__right"
          initial="hidden"
          animate="visible"
          variants={groupVariants}
        >
          <motion.p className="hero__description" variants={variants}>
            Placeholder description — replace with a short line about the
            developer's focus: the kind of products they build, the tools
            they favor, and what makes their work distinct.
          </motion.p>
          <motion.a
            href="#contact"
            className="hero__cta"
            variants={variants}
          >
            Start a project
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
