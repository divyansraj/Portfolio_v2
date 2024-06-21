import React from 'react';
import './Skills.scss'
import { useEffect, useState } from 'react';
import { AppWrap, MotionWrap } from '../../wrapper';
import { motion } from 'framer-motion';
import {Tooltip } from 'react-tooltip'
import gitLogo from "../../assets/git.png";
import reactLogo from "../../assets/react.png";
import htmlLogo from "../../assets/html.png";
import nodeLogo from "../../assets/node.png";
import tailwindLogo from "../../assets/tailwind.png";
import javascriptLogo from "../../assets/javascript.png";
import pythonLogo from "../../assets/python.png";
import reduxLogo from "../../assets/redux.png";
import postmanLogo from "../../assets/postman.png";
import cssLogo from "../../assets/css.png";
import cppLogo from "../../assets/cpp.png";
import sqlLogo from "../../assets/mysql.png";
import mongodbLogo from "../../assets/mongodb.png";
import expressLogo from "../../assets/express.png";
import githubLogo from "../../assets/github.png";


const Skills = () => {
    const [skills, setSkills] = useState([]);
    const [experiences, setExperiences] = useState([]);

    // Simulating manual data loading (replace with actual data loading logic)
    useEffect(() => {
      const fetchSkills = async () => {
        try {
          // Simulate fetching skills data
          const skillsData = [
            { name: "CPP", icon: cppLogo, bgColor: "#FFFFFF" },
            { name: "JS", icon: javascriptLogo, bgColor: "#FFFFFF" },
            { name: "React", icon: reactLogo, bgColor: "#FFFFFF" },
            { name: "Redux", icon: reduxLogo, bgColor: "#FFFFFF" },
            { name: "TailwindCSS", icon: tailwindLogo, bgColor: "#FFFFFF" },
            { name: "Node", icon: nodeLogo, bgColor: "#FFFFFF" },
            { name: "Express", icon: expressLogo, bgColor: "#FFFFFF" },
            { name: "MonogoDB", icon: mongodbLogo, bgColor: "#FFFFFF" },
            { name: "Mysql", icon: sqlLogo, bgColor: "#FFFFFF" },
            { name: "HTML", icon: htmlLogo, bgColor: "#FFFFFF" },

            { name: "CSS", icon: cssLogo, bgColor: "#FFFFFF" },
            { name: "Git", icon: gitLogo, bgColor: "#FFFFFF" },
            { name: "Github", icon: githubLogo, bgColor: "#FFFFFF" },
            { name: "Postman", icon: postmanLogo, bgColor: "#FFFFFF" },
            { name: "Python", icon: pythonLogo, bgColor: "#FFFFFF" },

            // Add more skills as needed
          ];
          setSkills(skillsData);
        } catch (error) {
          console.error("Error fetching skills:", error);
        }
      };

      const fetchExperiences = async () => {
        try {
          // Simulate fetching experiences data
          const experiencesData = [
            {
              year: "2023",
              works: [
                {
                  name: "Work 1",
                  company: "Company A",
                  desc: "Work 1 description",
                },
                {
                  name: "Work 2",
                  company: "Company B",
                  desc: "Work 2 description",
                },
                // Add more work experiences as needed
              ],
            },
            // Add more experiences as needed
          ];
          setExperiences(experiencesData);
        } catch (error) {
          console.error("Error fetching experiences:", error);
        }
      };

      fetchSkills();
      fetchExperiences();
    }, []);


    return (
        <>
            <h2 className='head-text'>Skills && Experience</h2>

            <div className='app__skills-container'>
                <motion.div className='app__skills-list'>
                    {skills.map((skill) => (
                        <motion.div
                            whileInView={{opacity: [0, 1]}}
                            transition={{duration: 0.5, scale:[1, 0.90 ]}}
                            className='app__skills-item app__flex'
                            key={skill.name}
                        >
                            <div className='app__flex' style={{backgroundColor: skill.bgColor}}>
                                <img src={skill.icon} alt={skill.name} />
                            </div>
                            <p className='p-text'> { skill.name } </p>
                        </motion.div>
                    ))}
                </motion.div>
                <motion.div className='app__skills-exp'>
                        {experiences?.map((experience) => (
                            <motion.div
                                className='app__skills-exp-item'
                                key={experience.year}
                            >
                                <div className='app__skills-exp-year'>
                                    <p className='bold-text'>{experience.year}</p>
                                </div>
                                <motion.div className='app__skills-exp-works'>
                                    {experience.works?.map((work) => (
                                        <>
                                            <motion.div
                                                whileInView={{opacity: [0, 1]}}
                                                transition={{duration: 0.5, scale:[1, 0.90 ]}}
                                                className='app__skills-exp-work '
                                                data-tooltip-id={work.name}
                                                // data-tooltip-content={work.desc}
                                                key={work.name}
                                            >
                                                <h4 className='bold-text'>{work.name}</h4>
                                                <p className='p-text'>{work.company}</p>
                                            </motion.div>
                                            <Tooltip
                                                id={work.name}
                                                arrowColor='#fff'
                                                className='skills-tooltip'

                                            >
                                                {work.desc}
                                            </Tooltip>
                                        </>
                                    ))}

                                </motion.div>
                            </motion.div>
                        ))}
                </motion.div>
            </div>
        </>
    );
}

export default AppWrap(MotionWrap(Skills,'app__skills'),'skills','app__primarybg');