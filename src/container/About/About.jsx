import React, { useEffect, useState } from "react";
import "./About.scss";
import { AppWrap, MotionWrap } from "../../wrapper";
import { motion } from "framer-motion";
import { images } from "../../constants";
 import resume from "../../assets/project/resume.txt";
const About = () => {
const [resumeUrl, setResumeUrl] = useState(resume);

  return (
    <>
      <h2 className="head-text">
        In the end, <span style={{ color: "#313bac" }}> it's not the</span> bugs
        in your code <br />
        <span style={{ color: "#313bac" }}>that matter</span>, but the code in
        your bugs.
      </h2>

      <div className="app__profiles">
        <motion.img src={images.profilePic} alt="profile_pic" />
        <motion.div
          whileInView={{ x: [-200, -50, 0], opacity: [0, 0, 1] }}
          className="app__profiles-info app__flex"
        >
          <div className="desc">
            <p className="heading-text">Welcome to My Portfolio!</p>
            <p className="content-text">
              FullStack Developer, who loves to try new ideas.
              <br />
              I'm into React and know my way around Nodejs for backend
              development. <br />
              Let's code something awesome together and turn ideas into reality!
            </p>
          </div>
          {resumeUrl && (
            <a
              href={resumeUrl}
              alt="resume"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download CV
            </a>
          )}
        </motion.div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(About, "app__about"),
  "about",
  "app__whitebg"
);
