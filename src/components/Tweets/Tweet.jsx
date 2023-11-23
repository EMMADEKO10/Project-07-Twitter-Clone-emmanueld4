// import TweetContent from "../TweetContent";
// import { MdOutlineVerified } from "react-icons/md";
// import { MdOutlineReplayCircleFilled } from "react-icons/md";
// import { BiRepost } from "react-icons/bi";
// import { FcLike } from "react-icons/fc";
// import { FaRegBookmark } from "react-icons/fa6";


export default function Tweet({ content, tweetAvatar, tweetTitle, tweetImage, tweetTitleDetails, like, retweet, commentaires}) {
  return (
    <div className="tweet">
      <div className="tweet-avatar">
        {tweetAvatar}
      </div>

      <div className="tweet-content">
        <div className="tweet-body">
          <div className="tweet-title">
            {tweetTitle}
           
            <img src="src\images\Verified.png" alt="Y" />
            
            {tweetTitleDetails} 
           
          </div>
          <div className="tweet-text">
            {content}
          </div>
          <div className="tweet-image">
            {tweetImage}
        
          </div>
        </div>
        <div className="tweet-actions">
          <div className="tweet-action">
            <img src="src\images\Reply.svg" alt="" />
            
            {commentaires}

          </div>
          <div className="tweet-action">
            <img src="src\images\Retweet.svg" alt="" />
            
             {retweet}
          
          </div>
          <div className="tweet-action">
          
            <img src="src\images\React.svg" alt="" /> 
            {like}

          </div>
          <div className="tweet-action">
          
          <img src="src\images\Tweet-Replies.svg" alt="" />

          </div>
        </div>
      </div>


    </div>
  );
}
