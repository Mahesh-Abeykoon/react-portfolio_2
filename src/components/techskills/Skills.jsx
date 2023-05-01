import React from "react";
import "./skills.scss";
import javascript from '../assets/js.png';
import java from "../assets/java.png";
import springBoot from "../assets/springboot.png";
import unity from "../assets/unity.png";
import android from "../assets/androidstudio.png";
import react from "../assets/react.png";
import sass from "../assets/sass.png";
import git from '../assets/git.png';
import github from '../assets/github.png';
import firebase from '../assets/firebase.png';
import postman from "../assets/postman.png";
import intellij from "../assets/iintellij.png";
import sourcetree from '../assets/sourcetree.png';
import bitbucket from '../assets/bitbucket.png';
import mysql from "../assets/mysql.png";
import mongo from "../assets/mongo.png";
import vscode from '../assets/vscode.png';
import node from '../assets/node.png';

export default function Skills() {
  return (
    <section className="skills-section">
      <h2>Skills</h2>
      <div className="skills-container">
        <div className="languages">
      <div className="skill">
          <img src={javascript} alt="Java Script" />
          <h3>JavaScript</h3>
        </div>
        <div className="skill">
          <img src={java} alt="Java" />
          <h3>Java</h3>
        </div>
        <div className="skill">
          <img src={springBoot} alt="Spring logo" />
          <h3>Spring boot</h3>
        </div>
        <div className="skill">
          <img src={react} alt="react logo" />
          <h3>React & React Native</h3>
        </div>
        <div className="skill">
          <img src={node} alt="node logo" />
          <h3>NodeJs</h3>
        </div>
        <div className="skill">
          <img src={sass} alt="sass logo" />
          <h3>SASS</h3>
        </div>
        </div>
        <div className="skill">
          <img src={firebase} alt="firebase logo" />
          <h3>Firebase</h3>
        </div>
        <div className="skill">
          <img src={mongo} alt="monogodb logo" />
          <h3>MongoDB</h3>
        </div>
        <div className="skill">
          <img src={mysql} alt="mysql" />
          <h3>MySQL </h3>
        </div>
        <div className="skill">
          <img src={git} alt="Git logo" />
          <h3>Git</h3>
        </div>
        <div className="skill">
          <img src={github} alt="github logo" />
          <h3>GitHub </h3>
        </div>
        <div className="skill">
          <img src={bitbucket} alt="bitbucket logo" />
          <h3>Bitbucket </h3>
        </div>
        <div className="skill">
          <img src={sourcetree} alt="sourcetree" />
          <h3>Sourcetree </h3>
        </div>
        <div className="skill">
          <img src={unity} alt="unity logo" />
          <h3>Unity</h3>
        </div>
        <div className="skill">
          <img src={android} alt="android studio logo" />
          <h3>Android Studio </h3>
        </div>
        <div className="skill">
          <img src={intellij} alt="IntelliJ logo" />
          <h3>IntelliJ</h3>
        </div>
        <div className="skill">
          <img src={vscode} alt="VS logo" />
          <h3>VS Code</h3>
        </div>
        <div className="skill">
          <img src={postman} alt="Postman logo" />
          <h3>Postman</h3>
        </div>
      </div>
    </section>
  );
}
