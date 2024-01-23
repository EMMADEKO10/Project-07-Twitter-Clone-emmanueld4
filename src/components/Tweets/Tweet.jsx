import TweetAvatar from "./TweetAvatar";
import TweetsContext from "../../context";
import TweetContent from "./TweetContent";
import { NavLink } from 'react-router-dom';
import { useState } from "react";
import { useContext } from "react";
import { useParams } from 'react-router-dom';
// import { users } from "../../Data-tweet/dataCompte";
import { Link } from "react-router-dom";

export default function Tweet({ tweet }) {
  const { currentUser, setCurrentUser } = useContext(TweetsContext);
  const { dataTweet, setDataTweets } = useContext(TweetsContext);
  // Fonction pour gérer le clic sur le TweetAvatar
  const handleTweetAvatarClick = (username) => {
    // Utilisez la valeur (username) comme nécessaire
    setCurrentUser(username);
  };
  const profilePath = `/profil/${encodeURIComponent(dataTweet.currentUser[currentUser].name)}`; 

  return (
    <div className="flex self-stretch justify-start items-start gap-5 p-5 border-b border-solid border-gray-700">
      <NavLink to={profilePath} className='tweet-avatar'>
        {/* Passez la fonction de gestion d'événements au composant enfant */}
        <TweetAvatar tweet={tweet} onTweetAvatarClick={handleTweetAvatarClick} />
      </NavLink>
      <TweetContent tweet={tweet} />
    </div>
  );
}



