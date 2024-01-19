import React, { useContext } from "react";
import { TweetsContext } from "../../App";
import { dataTweets } from "../../Data-tweet/dataTweet";
import { users } from "../../Data-tweet/dataCompte";

export default function TweetAvatar({ tweet }) {
    const { isLikeClick, setIsLikeClick } = useContext(TweetsContext);
    const { setFilteredTweets, setIsTweetClick} = useContext(TweetsContext);
    const { dataTweet, setDataTweets } = useContext(TweetsContext);
    const { setCurrentAccount} = useContext(TweetsContext);
    const { currentUser, setCurrentUser } = useContext(TweetsContext);
    const { numberLike, setNumberLike } = useContext(TweetsContext);
    const { dataTweetAction } = tweet

    let currentAccount = 0;

    const handleClick = () => {

        if (isLikeClick) {
            dataTweetAction.like = numberLike + 1;
            // console.log("1er C AVATAR, True : ", numberLike + 1);
        } else {
            dataTweetAction.like = dataTweetAction.like;
            // console.log("2er C AVATAR, false : ", dataTweetAction.like);
        }
            // console.log("C'est cliqué ? : ", isLikeClick);

        let filteredTweets = dataTweet.slice();
        
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