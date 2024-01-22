import React, { useContext } from "react";
import TweetsContext from "../../../context";
import TweetTitle from "./tweet-title"
import TweetText from './tweet-Text'


export default function TweetBody({ tweet }) {
    const { dataTweet} = useContext(TweetsContext);
    return (
        <div className='tweet-body'>

            <TweetTitle tweet ={tweet}/>
            <TweetText tweet = {tweet}/>
           
            {tweet.tweetImage && <div className="tweet-image"><img className="" src={tweet.tweetImage} alt="" /></div>}
            
        </div>
    )
}
