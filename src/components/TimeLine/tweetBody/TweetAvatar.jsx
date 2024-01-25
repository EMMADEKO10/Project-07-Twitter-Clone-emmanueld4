import React, { useContext } from "react";
import TweetsContext from "../../../context";


export default function TweetAvatar({ tweet }) {
    const { setFilteredTweets, setIsTweetClick} = useContext(TweetsContext);
    const { Data, setData} = useContext(TweetsContext);
    const { setCurrentAccount} = useContext(TweetsContext);
    const { currentUser, setCurrentUser } = useContext(TweetsContext);
  
    let currentAccount = 0;

    const handleClick = () => {

        let filteredTweets = Data.tweets.slice();
        const currentUserIdIndex = Data.currentUser.findIndex((user) => user.id === tweet.user_id);
        setCurrentUser(currentUserIdIndex);
        currentAccount = currentUserIdIndex;

        setCurrentAccount(currentAccount);
        filteredTweets = filteredTweets.filter((tweet) => tweet.user_id === Data.currentUser[currentUserIdIndex].id);
        setFilteredTweets(filteredTweets);
        
    };

return (
    <div onClick={handleClick} className="w-17 h-17 cursor-pointer">
        <img className="w-full h-full rounded-full" src={tweet.tweetAvatar} alt="" />
        </div>
   
);
}