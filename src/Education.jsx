
function Education() {
  return (
    <>
      <div className="education">
          <h2>Education</h2>
          <hr />
          <div className="education-content">

            {/* TODO: Consider making a component for each point */}

            <div className="education-point">
              <div className="educ-point-container">
                <h3>University</h3>
                <p>Graduation: Month XX</p>
              </div>
              <div className="educ-point-container">
                <p>Degree of XX</p>
                <p>GPA: X.XX</p>
              </div>
            </div>

          </div>
      </div>
    </>
  );
}

export default Education;