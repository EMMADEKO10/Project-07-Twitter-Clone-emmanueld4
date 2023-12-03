export default function TweetEditorButtons() {
    return (
        <div className="tweet-editor-buttons">
            <TweetEditorActions />
            <Button />
        </div>
    );
}
function TweetEditorActions() {
    return (

        <div className="tweet-editor-actions">
            <img src="src\images\Media.svg" alt="" />
            <img src="src\images\Gif.svg" alt="" />
            <img src="src\images\Poll.svg" alt="" />
            <img src="src\images\Group.svg" alt="" />
            <img src="src\images\Schedule (1).svg" alt="" />
        </div>
    );
}
function Button() {
    return (
        <div>
            <button id = "monBouton" className="button">Tweet</button> 
        </div>
        
    );
}
