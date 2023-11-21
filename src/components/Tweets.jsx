// import React from 'react';
// import TweetContent from '../TweetContent';
import Tweet from './Tweet';
import { FaTwitter } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";

const tweets = [
  {
    id: 1,
    tweetTitle : 'EMMANUEL DEKO, Come back',
    tweetAvatar:<img className='tweet-avatar' src='src/images/tweet-profile-photo.png' alt="Ava" />,
    
    content: 'La vie est be lorem21 Testez le nouveau système multiplateforme PowerShell https://aka.ms/pscore6 PS C:serOSTEDocuments roject-07-Twitter-Clone-emmanueld4> npm install react-icons --saveadded 1 package, and audited 80 packages in 7 packages are looking for funding',
  },
  {
    id: 2,
    content: 'This is another tweet.',
    tweetTitle: 'EMMANUEL DEKO',
    tweetImage: <img src='src/images/tweet-image.png'alt = ""/>,
    // tweetpicture:  <img src='src/images/tweet-image.png'alt = ""/>,
    tweetAvatar: <AiFillTwitterCircle className='avatar-icon'/>,
  },
  {
    id: 3,
    content: 'La vie est belle !',
    tweetTitle : 'EMMANUEL DILENGA ',
    
    tweetAvatar: <AiFillTwitterCircle className='avatar-icon'/>,
  },

  {
    id: 4,
    content: 'Il faut profiter de chaque instant !',
    author: 'Caroline',
    tweetTitle : 'EMMANUEL DEKO, Come back',
  
  },
];

const Tweets = () => {
  return (
    <div className="tweets">
      {tweets.map((tweet) => (
        <Tweet key={tweet.id} content={tweet.content} author={tweet.author} tweetTitle={tweet.tweetTitle} tweetImage={tweet.tweetImage} tweetAvatar={tweet.tweetAvatar} />
      ))}
    </div>
  );
};

export default Tweets;





























