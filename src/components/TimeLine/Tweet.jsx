import TweetsContext from "../../context";
import TweetContent from "./TweetContent";
import { NavLink } from 'react-router-dom';
import { useContext } from "react";
import TweetAvatar from "./tweetBody/TweetAvatar";

export default function Tweet({ tweet }) {
  const { currentUser, setCurrentUser } = useContext(TweetsContext);
  const { Data, setData } = useContext(TweetsContext);
  // Fonction pour gérer le clic sur le TweetAvatar
  const handleTweetAvatarClick = (username) => {
    // Utilisez la valeur (username) comme nécessaire
    setCurrentUser(username);
  };
  const profilePath = `/profil/${encodeURIComponent(Data.currentUser[currentUser].name)}`; 

  return (
    <div className="flex self-stretch justify-start items-start gap-4 p-3 border-b border-solid border-gray-700">
      <NavLink to={profilePath} className='tweet-avatar'>
        <TweetAvatar tweet={tweet} onTweetAvatarClick={handleTweetAvatarClick} />
      </NavLink>
      <TweetContent tweet={tweet} />
    </div>
  );
}



