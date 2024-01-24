import React, { useContext } from "react";
import TweetsContext from "../../../context";
import TweetTitle from "./tweet-title"
import TweetText from './tweet-Text'


export default function TweetBody({ tweet }) {
   
    const { dataTweet} = useContext(TweetsContext);

    return (
        // Tweet-body
        <div className="flex flex-col relative w-full gap-2">

            <TweetTitle tweet ={tweet}/>
            <TweetText tweet = {tweet}/>

            {tweet.tweetImage && <div className="w-full pt-1/10"><img className="max-w-full h-auto rounded-[2rem] border-solid border-gray-700 border-10" src={tweet.tweetImage} alt="" /></div>}
            
        </div>
    )
}