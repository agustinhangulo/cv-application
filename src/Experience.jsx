
function Experience({editable}) {
  return (
    <>
      <div className="experience">
        <div className="content-header">
          <h2>Experience</h2>
          {editable && <button>Edit</button>}
        </div>
        <hr />
        <div className="experience-content">

          {/* TODO: Consider using component for each point */}
          <div className="experience-point">
              <div className="exp-point-container">
                <h3>Position</h3>
                <p>Month XX - Month XX</p>
              </div>
              <p>Company</p>

              <ul className="exp-point-content">
                <li>I did this thing</li>
              </ul>
              
          </div>
        </div>
      </div>
    </>
  );
}

export default Experience;
