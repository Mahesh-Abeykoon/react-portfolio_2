
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import './experience.scss';

import universityLogo from "../assets/japura.png"
import affinitiLogo from "../assets/affiniti.png"


const educationData = [
{
  topic: "education",
  university: "University of Sri Jayewardenepura",
  degree: "BSc In Information Technology",
  duration: "2019-2023",
  description:
    "During my time at the University of Sri Jayewardenepura, I gained a strong foundation in IT concepts and technologies. I also honed my skills in problem-solving, critical thinking, and collaboration.",
},
];

const experienceData = [

  {
    topic: "work",
    company: "Affiniti Innovations",
    position: "Software Developer",
    duration: "2022 - present",
    description:
      "My work experience as a software developer (intern) at Affiniti Innovations has allowed me to apply the knowledge and skills I gained from my degree. I specialize in Java and Spring Boot, which I use to develop software applications that meet the unique needs of our clients.",
  },
];


export default function Experience ()  {

return (
  <div className="experience" id="experience">
    
        {experienceData.map((exp) => (
          <div className="grid-item-work" key={exp.company}>
            {/* <h4 className="title-work">Experience</h4> */}
            <img className="work" src={affinitiLogo}  />
            <div className="list-work">
              <div className="primary-work-topic">{exp.topic}</div>
              <div className="primary-work">{exp.company}</div>
              <div className="secondary-work">{exp.position}, {exp.duration}</div>
              <div className="description-work">{exp.description}</div>
            </div>
          </div>
        ))}
    

      
         {educationData.map((exp) => (
          <div className="grid-item-education" key={exp.university}>
            {/* <h4 className="title-education">Education</h4> */}
            <img className="education" src={universityLogo}  />
            <div className="list-education">
              <div className="primary-education-topic">{exp.topic}</div>
              <div className="primary-education">{exp.university}</div>
              <div className="secondary-education">{exp.degree}, {exp.duration}</div>
              <div className="description-education">{exp.description}</div>
            </div>
          </div>
        ))}
    
  </div>

  );
};

