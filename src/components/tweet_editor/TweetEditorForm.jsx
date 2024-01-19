import TweetEditorButtons from "./TweetEditorButtons";
import { useState } from "react";

export default function TweetEditorForm() {

  
  const [valueInputText, setvalueInputText] = useState();
  
  // console.log(valueInputText);
  
  return (
    <div className="tweet-editor-form">
      <TweetEditorInput setvalueInputText={setvalueInputText}/>
      <TweetEditorButtons setvalueInputText = {setvalueInputText} valueInputText = {valueInputText}/>
    </div>
  );
}


export function TweetEditorInput({setvalueInputText}) {
  const [value, setValue] = useState("");

  // Gestionnaire `onChange`
  const handleChange = (event) => {
    // Récupère la valeur entrée
    const newValue = event.target.value;
    // Met à jour la variable
    setvalueInputText(newValue);
  };
  return (
    <input type="text" className="tweet-editor-input" placeholder="Whats's happening" onChange={handleChange} />
  );
}



