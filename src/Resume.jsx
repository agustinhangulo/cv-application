import Info from './Info';
import Education from './Education';
import Skills from './Skills';
import Experience from './Experience';

function Resume() {
  return (
    <>
      <div className="resume">
        <Info></Info>
        <Education></Education>
        <Skills></Skills>
        <Experience></Experience>
      </div>
    </>
  );
}

export default Resume;
