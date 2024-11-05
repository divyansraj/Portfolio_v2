import React from "react";
import "./Footer.scss";
import { AppWrap, MotionWrap } from "../../wrapper";
import { images } from "../../constants";
import { SocialMedia } from "../../components";
import { BsLinkedin, BsGithub, BsTwitter } from "react-icons/bs";
const Footer = () => {
  return (
    <>
      <h2 className="head-text">Let's Connect</h2>
      <div className="app__footer-cards">
        <div className="app__footer-card">
          <img src={images.mail} alt="email" />
          <a href="mailto:divyanshu10245@gmail.com" className="p-text ">
            divyanshu10245@gmail.com
          </a>
        </div>
      </div>
      <div className="app__footer-links">
        <h3 className="head-text">My Profile Links</h3>
        <ul className="app__footer-links-list">
          <li>
            <a
              href="https://www.linkedin.com/in/divyanshu-kr/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-icon"
            >
              <BsLinkedin />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/divyansraj"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-icon"
            >
              <BsGithub />
            </a>
          </li>
          <li>
            <a
              href="https://x.com/Divyanshu___K"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-icon"
            >
              <BsTwitter />
            </a>
          </li>
          {/* Add more links as necessary */}
        </ul>
      </div>
      <SocialMedia styleClass={"app__social-min"} />
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, "app__footer"),
  "contact",
  "app__primarybg"
);
