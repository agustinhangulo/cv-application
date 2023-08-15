import Resume from "./Resume";

import { useState } from "react";


function App() {
  
  // editable determines whether the buttons to edit the components of the 
  // resume are shown. It is controlled by the Edit and Submit buttons
  const [editable, setEditable] = useState(false);

  const edit = () => {
    setEditable(true);
  };
  

  // This is a small app for me to learn React, so "submitting" just makes the
  // content static again
  const submit = () => {
    setEditable(false);
  };

  
  return (
    <>

      <div className="controls">
        <button onClick={edit} >Edit</button>
        <button onClick={submit} >Submit</button>
      </div>

      <Resume editable={editable}></Resume>
    </>
  );
}



export default App;
