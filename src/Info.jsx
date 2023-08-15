import Modal from "./Modal";
import { useState } from "react";

function Info( {editable} ) {

  const [modalOpen, setModalOpen ] = useState(false);

  const [nameInput, setNameInput] = useState('First Last');  // Name
  const [nameSubmission, setNameSubmission] = useState('First Last');
  
  const [locInput, setLocInput] = useState('City, Region 12345');  // Location
  const [locSubmission, setLocSubmission] = useState('City, Region 12345');
  
  const [numInput, setNumInput] = useState('(123) 123-1234');  // Phone #
  const [numSubmission, setNumSubmission] = useState('(123) 123-1234');
  
  const [emailInput, setEmailInput] = useState('email@domain.com');  // Email
  const [emailSubmission, setEmailSubmission] = useState('email@domain.com');
  
  const [linkInput, setLinkInput] = useState('linkedin.com');  // Link
  const [linkSubmission, setLinkSubmission] = useState('linkedin.com');

  const openModal = () => {
    setModalOpen(true);
  }

  const closeModal = () => {
    setModalOpen(false);
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    setNameSubmission(`${nameInput}`);  // Submit all fields
    setLocSubmission(`${locInput}`);
    setNumSubmission(`${numInput}`);
    setEmailSubmission(`${emailInput}`);
    setLinkSubmission(`${linkInput}`);
    
    closeModal();  // Close modal upon submitting
  }


  return (
    <>
      <div className="info">
        <h1>{nameSubmission}</h1>
        <div className='user-info'>
          <p>{locSubmission}</p>
          <p>{numSubmission}</p>
          <p><a href="mailto:email@domain.com">{emailSubmission}</a></p>
          <p><a target="_blank" rel="noreferrer" href={linkSubmission}>{linkSubmission}</a></p>
        </div>

        {editable && <button onClick={openModal} >Edit</button>}

        <Modal isOpen={modalOpen} onClose={closeModal}>
          <form onSubmit={handleSubmit} >

            <label>
              Name
              <input
                type="text"
                value={nameInput}
                onChange={(event) => setNameInput(event.target.value)}
                required />
            </label>

            <label>
              Location
              <input
                type="text"
                value={locInput}
                onChange={(event) => setLocInput(event.target.value)}
                required />
            </label>

            <label>
              Number
              <input
                type="text"
                value={numInput}
                onChange={(event) => setNumInput(event.target.value)}
                required />
            </label>

            <label>
              Email
              <input
                type="text"
                value={emailInput}
                onChange={(event) => setEmailInput(event.target.value)}
                required />
            </label>

            <label>
              Socials Link
              <input
                type="text"
                value={linkInput}
                onChange={(event) => setLinkInput(event.target.value)}
                required />
            </label>

            <button type="submit">Submit</button>
          </form>

        </Modal>


      </div>
    </>
  );
}

export default Info;