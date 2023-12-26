import React, { useContext } from "react";
import Tweet from "./Tweet";
import { dataTweets } from "../../Data-tweet/dataTweet";
import { TweetsContext } from "../../App";

export default function Tweets() {
  const context = useContext(TweetsContext);

  return (
    <div className="tweets">
      
      {dataTweets.map((tweet) => (
        <Tweet key={tweet.id} tweet={tweet} />
      ))}

    </div>
  );
};

