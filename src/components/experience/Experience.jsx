
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import './experience.scss';

import universityLogo from "../assets/japura.png"
import affinitiLogo from "../assets/affiniti.png"

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(3),
  },
  divider: {
    margin: theme.spacing(3),
  },
  paper: {
    padding: theme.spacing(2),
    margin: theme.spacing(2),
  },
  avatar: {
    backgroundColor: theme.palette.primary.main,
  },
}));

const educationData = [
{
  topic: "education",
  university: "University of Sri Jayewardenepura",
  degree: "BSc In Information Technology",
  duration: "2019-2023",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nec dui at nisl sagittis imperdiet a vel augue. Donec interdum, nulla vel bibendum aliquet, sapien quam varius mi, at sagittis tellus massa quis ipsum.",
},
];

const experienceData = [

  {
    topic: "work",
    company: "Affiniti Innovations",
    position: "Software Developer",
    duration: "2022 - present",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nec dui at nisl sagittis imperdiet a vel augue. Donec interdum, nulla vel bibendum aliquet, sapien quam varius mi, at sagittis tellus massa quis ipsum.",
  },
];


export default function Experience ()  {
  const classes = useStyles();

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

