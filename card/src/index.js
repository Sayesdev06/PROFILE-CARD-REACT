import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillsList />
      </div>
    </div>
  );
}

function Avatar() {
  return <img src="./profile.jpg" className="avatar"></img>;
}

function Intro() {
  return (
    <div>
      <h1>Mohamed Amine Sayes</h1>
      <p>
        My motivation stems from the desire to grow in the software development
        system and learn new things daily. My personality is characterized by
        enthusiasm, self-motivation, reliability, responsibility, and hard work.
        I am an mature team worker who is adaptable to all challenging
        situations.
      </p>
    </div>
  );
}
function Skill(props) {
  console.log(props);
  return (
    <div style={{ backgroundColor: props.color }} className="skill">
      <span>{props.name}</span>
    </div>
  );
}

function SkillsList() {
  return (
    <div className="skill-list">
      <Skill name="HTML" color="#FFAF00" />
      <Skill name="CSS" color="#0D92F4" />
      <Skill name="JAVASCRIPT" color="#F9E400" />
      <Skill name="REACT" color="#006BFF" />
      <Skill name="GIT and GITHUB" color="#D8D2C2" />
      <Skill name="NEXT JS" color="#674636" />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
