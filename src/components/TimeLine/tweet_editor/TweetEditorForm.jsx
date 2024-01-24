import TweetEditorButtons from "./TweetEditorButtons";
import { useState, useContext } from "react";
import TweetsContext from "../../../context";

export default function TweetEditorForm() {
  const [valueInputText, setvalueInputText] = useState();
  return (
    <div className="tweet-editor-form">
      <TweetEditorInput setvalueInputText={setvalueInputText}/>
      <TweetEditorButtons setvalueInputText = {setvalueInputText} valueInputText = {valueInputText}/>
    </div>
  );
}
export function TweetEditorInput({setvalueInputText}) {
  // Gestionnaire `onChange`
  const handleChange = (event) => {
    // Récupère la valeur entrée
    const newValue = event.target.value;
      setvalueInputText(newValue);
  };
  return (
    <input id="tweetInput" type="text" className="tweet-editor-input" placeholder="Whats's happening" onChange={handleChange} />
  );
}



