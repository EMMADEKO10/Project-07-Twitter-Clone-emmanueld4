import { React, useContext, useState } from "react";
import Tweet from "./Tweet";
import TweetsContext from "../../context";


function Tweets() {
  const { dataTweet, setDataTweets } = useContext(TweetsContext);
 
  return (
    <div className="tweets">
     
      {dataTweet.tweets.map((tweet) => (  
          < Tweet key={tweet.id} tweet={tweet} /> 
         ))}  
    </div>
  );
};

export default Tweets;


