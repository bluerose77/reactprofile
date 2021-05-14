import { useState } from "react";
import profile from './images/profile-pic.jpg';
import './App.css';
import Button from "./Component/Button";
import Counter from "./Component/Counter";
import Display from "./Component/Display";

function App() {

    const [skills, setSkills] = useState("My Name is Rosemarie");

    const handleName =()=>{
      setSkills("My Name is Rosemarie")
    }

    const handleSkill =()=>{
      setSkills("I'm a Frontend Developer")
    }

  return (
    <div className="main-container">
      <img src={profile} alt="profile" />

      <div className="appstyling">
        <Display tech={skills} />
      </div>

      <div className="btns">
        <Button ClickHandler={handleName} btntext={"Name"} />
        <Button ClickHandler={handleSkill} btntext={"Skill"} />
      </div>

      <div className="counter">
        <Counter />
      </div>
      
      <div className="social">
        <a href="https://github.com/bluerose77" target="_blank" rel="noreferrer"><i className="fab fa-github fa-2x"></i></a>
        <a href="https://www.linkedin.com/in/rosemarie-seus/" target="_blank" rel="noreferrer"><i className="fab fa-linkedin-in fa-2x"></i></a>
      </div>
    </div>
  );
}

export default App;
