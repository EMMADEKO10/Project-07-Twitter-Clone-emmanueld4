import TweetAvatar from "./TweetAvatar";
import TweetContent from "./TweetContent";


export default function Tweet({tweet, dataTweetActions}) {
  return (
    <div className="tweet">
      
      <TweetAvatar tweet={tweet} />
      <TweetContent tweet={tweet} />
    
    </div>
  );
}
