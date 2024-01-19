import TweetAvatar from "./TweetAvatar";
import TweetContent from "./TweetContent";
import { NavLink } from 'react-router-dom'
// import { TwiitContext } from "./Tweets";
// import { useContext } from "react";

export default function Tweet({tweet}) {
  return (
    <div className="tweet">

      <NavLink className={"tweet-avatar"} to={'/Profil'}><TweetAvatar tweet={tweet} /></NavLink>

      <TweetContent tweet={tweet} />

    </div>
  );
}
