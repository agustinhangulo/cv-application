import { useState } from "react";
import Skill from "./Skill";
import { v4 as uuid } from "uuid";

function Skills({editable}) {
  
  // Want:
  //  - List of elements that can be added to/removed from
  //  - Each element can be edited and only shows changes once submitted


  // Solution:
  //  - Component for each element:
  //    - Add button instead of edit button in resume
  //    - Click on component to edit/delete
  //      - Pass a function from parent to item that is used to modify list of items

  const [skillsList, setSkillsList] = useState([]);

  const addSkill = () => {
    const newSkill = {  // New skill
      id: uuid(),
      category: 'Category',
      points: 'XYZ'
    };

    setSkillsList( [...skillsList, newSkill] );  // Append new skill to end
  };

  const removeSkill = (event) => {
    // Filter out the skill that was clicked on
    setSkillsList(skillsList.filter( (skill) => skill.id !== event.target.id));
  }

  return (
    <>
      <div className="skills">
        <div className="content-header">
          <h2>Skills</h2>
        </div>
        <hr />
        <div className="skills-content">

          { skillsList.map( (skill) => { 
              return (
                <Skill editable={editable} skill={skill} removeSkill={removeSkill} key={skill.id} ></Skill>
              );
          })}

          {editable && <button onClick={addSkill}>Add Skill Category</button>}
        </div>
      </div>
    </>
  );
}

export default Skills;
