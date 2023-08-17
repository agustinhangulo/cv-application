import Modal from "./Modal";
import { useState } from "react";


function Skill({editable, skill, removeSkill}) {

  const [modalOpen, setModalOpen ] = useState(false);
  const openModal = () => { setModalOpen(true); };
  const closeModal = () => { setModalOpen(false); };
  
  const [categoryInput, setCategoryInput] = useState(`${skill.category}`);  // Category
  const [categorySubmission, setCategorySubmission] = useState(`${skill.category}`);

  const [skillsInput, setSkillsInput] = useState(`${skill.points}`);  // Skill
  const [skillsSubmission, setSkillsSubmission] = useState(`${skill.points}`);
  
  const handleSubmit = (event) => {
    event.preventDefault();

    // Modify original object
    skill.category = categoryInput;
    skill.skillsInput = skillsInput;

    // Modify state to trigger rerender
    setCategorySubmission(`${categoryInput}`);
    setSkillsSubmission(`${skillsInput}`);

    closeModal();
  };
  
  return(
    <>
      <div className="skill">
        
        <div className="skill-content">
          <h3>{categorySubmission}</h3>
          <p>{skillsSubmission}</p>
        </div>

        {
          editable &&
          <div className="buttons">
            <button onClick={openModal} >Edit</button>
            <button onClick={removeSkill} id={skill.id} >Delete</button>
          </div>
        }

        <Modal isOpen={modalOpen} onClose={closeModal}>

          <form onSubmit={handleSubmit}>

            <label>
              Category
              <input 
                type="text" 
                value={categoryInput}
                onChange={ (event) => setCategoryInput(event.target.value)}
                required
              />
            </label>

            <label>
              Skills
              <input 
                type="text" 
                value={skillsInput}
                onChange={ (event) => setSkillsInput(event.target.value)}
                required
              />
            </label>

            <button type="submit">Submit</button>
          </form>

        </Modal>

      </div>
    </>
  );

}

export default Skill;
