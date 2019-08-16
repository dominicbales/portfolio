import React from "react";

export default function Skills() {
  return (
    <div id="skills" className="container skills-sections">
      <h1 className="skills-title">Skills</h1>
      <div
        className="row"
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center"
        }}
      >
        <div className="col-12 col-md-4 skills-list-item">
          <h3 className="skills-subtitle" style={{ textAlign: "center" }}>
            Front-end
          </h3>
          <ul className="skills-ul-list">
            <li>HTML</li>
            <li>CSS</li>
            <li>Javascript</li>
            <li>jQuery</li>
            <li>React</li>
            <li>Bootstrap</li>
            <li>Semantic-UI</li>
            <li>Material UI</li>
          </ul>
        </div>
        <div className="col-12 col-md-4 skills-list-item">
          <h3 className="skills-subtitle" style={{ textAlign: "center" }}>
            Back-end
          </h3>
          <ul className="skills-ul-list">
            <li>Node</li>
            <li>Express</li>
            <li>MySQL</li>
            <li>MongoDB</li>
            <li>JWT</li>
            <li>Passport</li>
            <li>Firebase</li>
            <li>RESTFul API</li>
          </ul>
        </div>
        <div className="col-12 col-md-4">
          <h3 className="skills-subtitle" style={{ textAlign: "center" }}>
            Tools
          </h3>
          <ul className="skills-ul-list">
            <li>Azure DevOps</li>
            <li>Git</li>
            <li>Github</li>
            <li>Heroku</li>
            <li>VS Code</li>
          </ul>
        </div>
      </div>
    </div>
  );
}