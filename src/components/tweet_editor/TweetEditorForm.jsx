import TweetEditorButtons from "./TweetEditorButtons";

export default function TweetEditorForm() {
  return (
    <div className="tweet-editor-form">
      <TweetEditorInput />
      <TweetEditorButtons />
    </div>
  );
}


export function TweetEditorInput() {
  return (
    <input type="text" className="tweet-editor-input" placeholder="Whats's happening" />
  );
}



