import Info from './Info';
import Education from './Education';
import Skills from './Skills';
import Experience from './Experience';


function Resume({editable}) {
  return (
    <>
      <div className="resume">
        <Info editable={editable} ></Info>
        <Education editable={editable}></Education>
        <Skills editable={editable}></Skills>
        <Experience editable={editable}></Experience>
      </div>
    </>
  );
}

export default Resume;
