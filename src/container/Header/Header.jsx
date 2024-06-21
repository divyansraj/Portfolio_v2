import React, { useRef } from "react";
import "./Header.scss";
import { motion, useInView } from "framer-motion";
import { ReactTyped as Typed } from "react-typed";
import { images } from "../../constants";
import { AppWrap } from "../../wrapper";

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

const defaultAnimations = {
  hidden: {
    opacity: 0,
    y: 10,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

const Header = () => {
  const animateTagRef = useRef(null);
  const isTagInView = useInView(animateTagRef, { amount: 0.5 });

  return (
    <div className="app__header app__flex">
      <div className="app__header-info">
        <div className="app__header-badge">
          <motion.div
            whileInView={{ x: [-100, 0], opacity: [0, 1] }}
            transition={{ duration: 0.5 }}
            className="badge-cmp app__flex"
          >
            <span className="badge-cmp-wave">👋</span>
            <div style={{ marginLeft: 20 }}>
              <p className="p-text">Hello, I am</p>
              <h1 className="head-text">Divyanshu</h1>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__header-img"
      >
        <div className="app__header-head-tag">
          <motion.h1
            className="app__header-head-tag-first"
            ref={animateTagRef}
            initial="hidden"
            animate={isTagInView ? "visible" : "hidden"}
            transition={{ staggerChildren: 0.1 }}
          >
            <div className="animate-tag">
              <Typed
                strings={[
                  "Full Stack Developer",
                  "Backend Developer",
                  "Frontend Developer",
                  "Coder",
                ]}
                typeSpeed={50}
                backSpeed={50}
                loop
              />
            </div>
          </motion.h1>
        </div>

        <motion.img
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="overlay_circle"
          src={images.circle}
          alt="profile_circle"
        />
      </motion.div>

      <motion.div
        variants={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className="app__header-circles"
      >
        {[images.mongodb, images.express, images.react, images.node].map(
          (circle, index) => (
            <div className="circle-cmp app__flex" key={`circle-${index}`}>
              <img src={circle} alt="circle" />
            </div>
          )
        )}
      </motion.div>
    </div>
  );
};

export default AppWrap(Header, "home");
