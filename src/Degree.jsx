import { useState } from "react";
import Modal from "./Modal"

function Degree({editable, degree, removeDegree}) {

  const [modalOpen, setModalOpen ] = useState(false);
  const openModal = () => { setModalOpen(true); };
  const closeModal = () => { setModalOpen(false); };

  const [universityInput, setUniversityInput] = useState(`${degree.university}`);  // University
  const [universitySubmission, setUniversitySubmission] = useState(`${degree.university}`);
  
  const [graduationInput, setGraduationInput] = useState(`${degree.graduation}`);  // Graduation
  const [graduationSubmission, setGraduationSubmission] = useState(`${degree.graduation}`);
  
  const [typeInput, setTypeInput] = useState(`${degree.type}`);  // Degree Type
  const [typeSubmission, setTypeSubmission] = useState(`${degree.type}`);
  
  const [gpaInput, setGPAInput] = useState(`${degree.gpa}`);  // GPA
  const [gpaSubmission, setGPASubmission] = useState(`${degree.gpa}`);

  const handleSubmit = (event) => {
    event.preventDefault();

    // Modify original object
    degree.university = universityInput;
    degree.graduation = graduationInput;
    degree.type = typeInput;
    degree.gpa = gpaInput;

    // Trigger rerender
    setUniversitySubmission(universityInput);
    setGraduationSubmission(graduationInput);
    setTypeSubmission(typeInput);
    setGPASubmission(gpaInput);

    closeModal();
  }

  return (
    <div className="degree">  
      <div className="degree-content">
        <div className="degree-container">
          <h3>{universitySubmission}</h3>
          <p>{graduationSubmission}</p>
        </div>
        
        <div className="degree-container">
          <p>{typeSubmission}</p>
          <p>GPA: {gpaSubmission}</p>
        </div>
      </div>

      {
        editable &&
        <div className="buttons">
          <button onClick={openModal} >Edit</button>
          <button id={degree.id} onClick={removeDegree} >Delete</button>
        </div>
      }

      <Modal isOpen={modalOpen} onClose={closeModal}>
        <form>

          <label>
            University
            <input 
              type="text" 
              value={universityInput}
              onChange={ (event) => setUniversityInput(event.target.value)}
              required
            />
          </label>

          <label>
            Graduation Date
            <input 
              type="text" 
              value={graduationInput}
              onChange={ (event) => setGraduationInput(event.target.value)}
              required
            />
          </label>
          
          <label>
            Degree
            <input 
              type="text" 
              value={typeInput}
              onChange={ (event) => setTypeInput(event.target.value)}
              required
            />
          </label>

          <label>
            GPA
            <input 
              type="text" 
              value={gpaInput}
              onChange={ (event) => setGPAInput(event.target.value)}
              required
            />
          </label>

          <button type="submit" onClick={handleSubmit}>Submit</button>
        </form>
      </Modal>


    </div>
  );
}

export default Degree;
