import React, { useEffect, useState } from "react";
import "./Work.scss";
import { AppWrap, MotionWrap } from "../../wrapper";
import { motion } from "framer-motion";
import { AiOutlineExport, AiFillGithub } from "react-icons/ai";

import project1 from "../../assets/project/project1.png";
import project2 from "../../assets/project/project2.png";
import project3 from "../../assets/project/project3.png";
import project4 from "../../assets/project/project4.png";
import project5 from "../../assets/project/project5.png";
import project6 from "../../assets/project/project6.png";
import project7 from "../../assets/project/project7.png";
import project8 from "../../assets/project/project8.png";
// Simulated works data
const worksData = [
  {
    title: "Foodio - Food App",
    description:
      "Foodio revolutionizes food delivery with its stylish admin panel built using React, Redux, MongoDB, and Express.js. This full-stack platform allows seamless management of food items and delivery statuses, complemented by a sleek interface styled with Tailwind CSS for a modern user experience.",
    tags: ["Web App"],
    imgUrl: project1,
    projectLink: "https://foodio-app-yzyz.vercel.app/",
    codeLink: "https://github.com/divyansraj/FoodioApp",
  },
  {
    title: "mTube - Youtube Clone",
    description:
      "mTube is a React app powered by YouTube API v3, featuring real-time search, dynamic video cards, and nested comments. Styled with Tailwind CSS, it offers a modern user interface with smooth search and infinite scroll for seamless browsing. Discover mTube for a fresh YouTube experience.",
    tags: ["Web App"],
    imgUrl: project2,
    projectLink: "https://mtubeapp.vercel.app/",
    codeLink: "https://github.com/divyansraj/mTube-YouTube-App",
  },
  {
    title: "Ecommerce - Backend",
    description:
      "Powered by Express.js and MongoDB, this backend supports a t-shirt store with user authentication, role-based access control, and admin-managed product operations. Built for scalability and security, it ensures efficient management of store functionalities and user interactions.",
    tags: ["Web App"],
    imgUrl: project3,
    projectLink: "",
    codeLink: "https://github.com/divyansraj/Ecommerce-Backend",
  },
  {
    title: "Password Generator",
    description:
      "Generates passwords with customizable length and character types (uppercase, lowercase, numbers, symbols), ensuring strong and tailored security options.",
    tags: ["Mini Project"],
    imgUrl: project4,
    projectLink: "https://divyansraj.github.io/password-generator/",
    codeLink: "https://github.com/divyansraj/password-generator",
  },
  {
    title: "Weather App",
    description:
      "Utilizes OpenWeatherMap API for real-time weather updates based on current location and city searches worldwide.",
    tags: ["Mini Project"],
    imgUrl: project5,
    projectLink: "https://weather-app-three-delta-57.vercel.app/",
    codeLink: "https://github.com/divyansraj/WeatherApp",
  },
  {
    title: "Tic Tac Toe",
    description:
      "Enjoy a fun and straightforward tic-tac-toe game, perfect for leisurely entertainment and quick gameplay sessions.",
    tags: ["Mini Project"],
    imgUrl: project6,
    projectLink: "https://tic-tac-toe-bice-tau.vercel.app/",
    codeLink: "https://github.com/divyansraj/tic-tac-toe",
  },
  {
    title: "Parallex Effect",
    description:
      "Immerse yourself in a visually captivating website featuring parallax scrolling effects.",
    tags: ["Mini Project"],
    imgUrl: project7,
    projectLink: "https://divyansraj.github.io/ParallexSite/",
    codeLink: "https://github.com/divyansraj/ParallexSite",
  },
  {
    title: "Profile Modal",
    description:
      "A sleek and minimalistic modal window that displays user profile information, providing a clean and intuitive interface for viewing and updating user details.",
    tags: ["Mini Project"],
    imgUrl: project8,
    projectLink: "https://divyansraj.github.io/Share-Modal/",
    codeLink: "https://github.com/divyansraj/Share-Modal",
  },
  // Add more works as needed
];

const Work = () => {
  const [activeFilter, setActiveFilter] = useState("All"); // Changed initial activeFilter to "All"
  const [filterWorks, setFilterWorks] = useState([]);
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

  useEffect(() => {
    // Initially set filterWorks to all worksData
    setFilterWorks(worksData);
  }, []);

  const handleWorkFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);

      if (item === "All") {
        setFilterWorks(worksData);
      } else {
        setFilterWorks(worksData.filter((work) => work.tags.includes(item)));
      }
    }, 500);
  };

  return (
    <>
      <h2 className="head-text">
        My <span> Portfolio </span> Section
      </h2>

      <div className="app__work-filter">
        {["All", "Web App", "Mini Project"].map(
          (
            item,
            index // Added "All" to show all projects initially
          ) => (
            <div
              key={index}
              onClick={() => {
                handleWorkFilter(item);
              }}
              className={`app__work-filter-item app__flex p-text ${
                activeFilter === item ? "item-active" : ""
              }`}
            >
              {item}
            </div>
          )
        )}
      </div>

      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__work-portfolio"
      >
        {filterWorks.map((work, index) => (
          <div className="app__work-item app__flex" key={index}>
            <div className="app__work-img app__flex">
              <img src={work.imgUrl} alt={work.title} />
              <motion.div
                transition={{
                  duration: 0.25,
                  ease: "easeInOut",
                  staggerChildren: 0.5,
                }}
                className="app__work-hover app__flex"
              >
                {work.projectLink ? (
                  <a href={work.projectLink} target="_blank" rel="noreferrer">
                    <motion.div
                      whileHover={{ scale: [1, 0.9] }}
                      transition={{ duration: 0.3 }}
                      className="app__flex"
                    >
                      <AiOutlineExport />
                    </motion.div>
                  </a>
                ) : (
                  <></>
                )}

                <a href={work.codeLink} target="_blank" rel="noreferrer">
                  <motion.div
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{ duration: 0.3 }}
                    className="app__flex"
                  >
                    <AiFillGithub />
                  </motion.div>
                </a>
              </motion.div>
            </div>
            <div className="app__work-content app__flex">
              <h4 className="bold-text">{work.title}</h4>
              <p className="p-text" style={{ marginTop: 10 }}>
                {work.description}
              </p>

              <div className="app__work-tag app__flex">
                <p className="p-text">{work.tags[0]}</p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </>
  );
};

export default AppWrap(MotionWrap(Work, "app__work"), "work", "app__primarybg");
