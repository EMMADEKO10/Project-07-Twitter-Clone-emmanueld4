import React, { useContext } from "react";
import { TweetsContext } from "../../App";
import { dataTweets } from "../../Data-tweet/dataTweet";
import { users } from "../../Data-tweet/dataCompte";

// export let currentUser = 0;

export default function TweetAvatar({ tweet }) {
    const { setFilteredTweets, setIsTweetClick} = useContext(TweetsContext);
    const { setCurrentAccount} = useContext(TweetsContext);
    const { currentUser, setCurrentUser } = useContext(TweetsContext);
    let currentAccount = 0;

   
    const handleClick = () => {
        setIsTweetClick(prevState => !prevState);

        // Créer une copie de dataTweets avant de filtrer
        let filteredTweets = dataTweets.slice(); // Utiliser let à la place de const
        // Trouver l'indice du premier élément dont l'ID correspond à l'ID de l'utilisateur actuel
        const currentUserIdIndex = users.findIndex((user) => user.id === tweet.user_id);
        // currentUser = currentUserIdIndex;
        setCurrentUser(currentUserIdIndex);
        currentAccount = currentUserIdIndex;

        setCurrentAccount(currentAccount);
        // Filtrer les tweets par l'ID de l'utilisateur actuel
        filteredTweets = filteredTweets.filter((tweet) => tweet.user_id === users[currentUserIdIndex].id);

        setFilteredTweets(filteredTweets);
        console.log(filteredTweets);
        console.log("Voici une liste : ",users[currentUserIdIndex]);
        console.log("AZUZZZUU EHEHDHDH GGDGD : ",currentAccount," + ", currentUser);
    };

return (
        <div onClick={handleClick} className='tweet-avatar'>
            <img src={tweet.tweetAvatar} alt="" />
        </div>
   
);
}