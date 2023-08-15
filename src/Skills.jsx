
function Skills({editable}) {
  return (
    <>
      <div className="skills">
        <div className="content-header">
          <h2>Skills</h2>
          {editable && <button>Edit</button>}
        </div>
        <hr />
        <div className="skills-content">

          {/* TODO: Consider using component for each point */}
          <div className="skill-point">
            <h3>Category:</h3>
            <p>X, Y, Z</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Skills;
