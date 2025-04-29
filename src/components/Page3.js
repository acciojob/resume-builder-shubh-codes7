import React from "react";
import NavButtons from "./NavButtons.js";
import "../styles/App.css";

export default function Page3({ skills, setSkills }) {
  const [skill, setSkill] = React.useState("");

  function handleSubmit() {
    setSkills((prev) => [...prev, skill]);
    setSkill("");
  }

  return (
    <>
      <h2>Add your Skills details</h2>
      <form>
        <input
          onChange={(e) => {
            setSkill(e.target.value);
          }}
          type="text"
          placeholder="Skill*"
          name="skill"
          value={skill}
          required={true}
        />
      </form>
      <div className="navButtons">
        <button id="delete_skill">DELETE</button>
        <button onClick={handleSubmit} id="add_skill">
          ADD SKILL
        </button>
      </div>

      <h3>Added Skills:</h3>
      <ul>
        {skills.length > 0 &&
          skills.map((skill, idx) => <li key={idx}>{skill}</li>)}
      </ul>
      <NavButtons page={2} />
    </>
  );
}
