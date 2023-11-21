
// import { MdOutlinePhotoLibrary } from "react-icons/md";
import { MdGifBox } from "react-icons/md";
import { FaBarsStaggered } from "react-icons/fa6";
import { MdOutlineEmojiEmotions } from "react-icons/md";
import { LuCalendarClock } from "react-icons/lu";

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
           <MdGifBox />
           <FaBarsStaggered />
           <MdOutlineEmojiEmotions />
           <LuCalendarClock />
          
          
        </div>
    );
}
function Button() {
    return (
        <button className="button">Poster</button>
    );
}
