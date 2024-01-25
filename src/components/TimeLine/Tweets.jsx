import { React, useContext, useState } from "react";
import Tweet from "./Tweet";
import TweetsContext from "../../context";


function Tweets() {
  const { Data, setData } = useContext(TweetsContext);
 
  return (
    <div className="tweets">
     
      {Data.tweets.map((tweet) => (  
          < Tweet key={tweet.id} tweet={tweet} /> 
         ))}  
    </div>
  );
};

export default Tweets;


