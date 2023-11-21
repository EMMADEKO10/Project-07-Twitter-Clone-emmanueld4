import TweetContent from "../TweetContent";
import { MdOutlineVerified } from "react-icons/md";
import { MdOutlineReplayCircleFilled } from "react-icons/md";
import { BiRepost } from "react-icons/bi";
import { FcLike } from "react-icons/fc";
import { FaRegBookmark } from "react-icons/fa6";
// import { FaTwitter } from "react-icons/fa";





import React from 'react';

// content, author, image, tweetAvatar, tweetTitle, tweetText,TweetImage, tweetTitleAuthor, tweetTitleDetails 

export default function Tweet({ content, tweetAvatar, tweetTitle, tweetImage }) {
  return (
    <div className="tweet">
      <div className="tweet-avatar">
        {tweetAvatar}
      </div>

      <div className="tweet-content">
        <div className="tweet-body">
          <div className="tweet-title">
            {tweetTitle}<MdOutlineVerified />
          </div>
          <div className="tweet-text">
            {content}
          </div>
          <div className="tweet-image">
            {tweetImage}
            {/* <img src={tweetImage} alt = ""/> */}
          </div>
        </div>
        <div className="tweet-actions">
          <div className="tweet-action">
            <MdOutlineReplayCircleFilled />
          </div>
          <div className="tweet-action">
            <BiRepost />
          </div>
          <div className="tweet-action">
            <FcLike />
          </div>
          <div className="tweet-action">
          <FaRegBookmark />
          </div>
        </div>
      </div>


    </div>
  );
}









// const tweets = [
// {
// id: 1,
// content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias facere nam quod.',
// },
// {
// id: 2,
// content: <TweetContent />,
// },
// ];
// 
// 
// 
// const Tweets = () => {
// return (
// <div className="tweets">
{/* {tweets.map((tweet) => ( */ }
{/* <Tweet key={tweet.id} content={tweet.content} /> */ }
{/* ))} */ }
{/* </div> */ }
// );
// };








// export function Tweet1() {
// return (
// 
// <div className="tweet">
{/*  */ }
{/* Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias facere nam quod. */ }
{/*  */ }
{/* </div> */ }
// );
// }
// 
// 
//  function Tweet2() {
// return (
// <div className="tweet">
{/* <TweetContent /> */ }
{/* </div> */ }
//
// );
// }
//
// export default Tweet2