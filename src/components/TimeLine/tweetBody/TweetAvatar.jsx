import React, { useContext } from "react";
import TweetsContext from "../../../context";


export default function TweetAvatar({ tweet }) {
    const { setFilteredTweets, setIsTweetClick} = useContext(TweetsContext);
    const { dataTweet, setDataTweets } = useContext(TweetsContext);
    const { setCurrentAccount} = useContext(TweetsContext);
    const { currentUser, setCurrentUser } = useContext(TweetsContext);
  
    let currentAccount = 0;

    const handleClick = () => {

        let filteredTweets = dataTweet.tweets.slice();
        const currentUserIdIndex = dataTweet.currentUser.findIndex((user) => user.id === tweet.user_id);
        setCurrentUser(currentUserIdIndex);
        currentAccount = currentUserIdIndex;

        setCurrentAccount(currentAccount);
        filteredTweets = filteredTweets.filter((tweet) => tweet.user_id === dataTweet.currentUser[currentUserIdIndex].id);
        setFilteredTweets(filteredTweets);
        
    };

return (
    <div onClick={handleClick} className="w-17 h-17 cursor-pointer">
        <img className="w-full h-full rounded-full" src={tweet.tweetAvatar} alt="" />
        </div>
   
);
}