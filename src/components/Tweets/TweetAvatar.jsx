import React, { useContext } from "react";
import TweetsContext from "../../context";
import { dataTweets } from "../../Data-tweet/dataTweet";
import { users } from "../../Data-tweet/dataCompte";

export default function TweetAvatar({ tweet }) {
    const { isLikeClick, setIsLikeClick } = useContext(TweetsContext);
    const { setFilteredTweets, setIsTweetClick} = useContext(TweetsContext);
    const { dataTweet, setDataTweets } = useContext(TweetsContext);
    const { setCurrentAccount} = useContext(TweetsContext);
    const { currentUser, setCurrentUser } = useContext(TweetsContext);
    const { numberLike, setNumberLike } = useContext(TweetsContext);

    let currentAccount = 0;

    const handleClick = () => {

        let filteredTweets = dataTweet.tweets.slice();
        const currentUserIdIndex = users.findIndex((user) => user.id === tweet.user_id);
        setCurrentUser(currentUserIdIndex);
        currentAccount = currentUserIdIndex;

        setCurrentAccount(currentAccount);
        filteredTweets = filteredTweets.filter((tweet) => tweet.user_id === users[currentUserIdIndex].id);
        setFilteredTweets(filteredTweets);
        
    };

return (
        <div onClick={handleClick} className='tweet-avatar'>
            <img src={tweet.tweetAvatar} alt="" />
        </div>
   
);
}