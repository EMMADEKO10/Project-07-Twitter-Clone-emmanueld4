import { React, useContext, useState } from "react";
import Tweet from "./Tweet";
import { dataTweets } from "../../Data-tweet/dataTweet";
import { TweetsContext } from "../../App";
import data from "../../data/initial-data.json";

export default function Tweets() {
  const { dataTweet, setDataTweets } = useContext(TweetsContext);
  const { dataTwitter, setDataTwitter } = useContext(TweetsContext);
  setDataTweets(dataTweet);
  
  
  return (
    <div className="tweets">
     
      {dataTweet.map((tweet) => (  
         < Tweet key = {tweet.id} tweet = { tweet } /> 
         ))}  
    </div>
  );
};


