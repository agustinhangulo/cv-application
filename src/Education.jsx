import Degree from "./Degree";
import { useState } from "react";
import { v4 as uuid } from "uuid";


function Education({editable}) {

  const [degreesList, setDegreesList] = useState([]);

  const addDegree = () => {
    const newDegree = {
      id: uuid(),
      university: 'University',
      graduation: 'Month XX',
      gpa: 'X.XX',
      type: 'Degree of XX'
    };
    setDegreesList([...degreesList, newDegree]);
  };

  const removeDegree = (event) => {
    setDegreesList(degreesList.filter( (degree) => degree.id !== event.target.id));

  }

  return (
    <>
      <div className="education">

          <div className="content-header">
            <h2>Education</h2>
          </div>

          <hr />
          <div className="education-content">

            { degreesList.map( (degree) => {
              return (
                <Degree editable={editable} degree={degree} removeDegree={removeDegree} key={degree.id} ></Degree>
              );
            })}

            {editable && <button onClick={addDegree} >Add degree</button>}
          </div>
      </div>
    </>
  );
}

export default Education;
