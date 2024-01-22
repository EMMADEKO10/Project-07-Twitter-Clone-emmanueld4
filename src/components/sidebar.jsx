
// Ce fichier contient plusieurs composant.

import { Button } from './tweet_editor/TweetEditorButtons';
import { NavLink } from "react-router-dom";
import { users } from "../Data-tweet/dataCompte";
import { useContext } from "react";
import TweetsContext from '../context';
import { dataTweets } from '../Data-tweet/dataTweet';


export default function Sidebar({tweet}) {

    const { filteredTweets, setFilteredTweets } = useContext(TweetsContext);
    const { dataTweet, setDataTweets } = useContext(TweetsContext);
    const profilePath = `/profil/${encodeURIComponent(users[1].name)}`; 
//    -------------------------------------------------------------------------------------

    const handleClick = () => {
    
        let filteredTweets = dataTweet.tweets.slice(); 
        filteredTweets = filteredTweets.filter((tweet) => tweet.user_id ===1);
        setFilteredTweets(filteredTweets);
        
    };

    return (

        <div className="sidebar">
            <div className='sidebarNav'>

                <ul>
                    <li><Navigation logo={"/images/image Page 2/Icons/Twitter.png"} titre="" /></li>
                    <li><NavLink to='/'><Navigation logo={"/images/image Page 2/Icons/Home-Fill.svg"} titre="Home" /></NavLink></li>
                    <li><Navigation logo={"/images/image Page 2/Icons/Explore.svg"} titre="Explore" /></li>
                    <li><Navigation logo={"/images/image Page 2/Icons/Notifications.svg"} titre="Notifications" /></li>
                    <li><Navigation logo={"/images/image Page 2/Icons/Messages.svg"} titre="Messages" /></li>
                    <li> <Navigation logo={"/images/image Page 2/Icons/Bookmarks.svg"} titre="Bookmarks" /></li>
                    <li><Navigation logo={"/images/image Page 2/Icons/Lists.svg"} titre="Lists" /></li>
                    <li onClick={handleClick}><NavLink to={profilePath}><Navigation logo={"/images/image Page 2/Icons/Profile.svg"} titre="Profils" /></NavLink></li>
                    <li><Navigation logo={"/images/image Page 2/Icons/More.svg"} titre="More" /></li>
                </ul>
                <Button />
            </div>

            <TitreProfilSidebar />
        </div>
    )
}

function TitreProfilSidebar() {
    
    return (

    <div>
        <div className="tweet-content-follow">
            <div className="avatar-follow">
            <img className="icons-home-fill" src="/images/profile-photo.png" alt="" />
            </div>
            <div className="tweet-details">
                <div className="tweet-title-follow"> <div>Bradley Ortiz </div> < img src="\images\image Page 2\Icons\Market_Pri.png" alt="" /></div>
                <p>@Bradley_</p>
            </div>
            <span><img src="\images\image Page 2\Icons\3point.png" alt="" /></span>
        </div>
    </div>
    )
}

export function Navigation({ logo, titre }) {

    return (
        <div className="menu-button-normal">
            <span><img className="icons-home-fill" src={logo} alt="" /></span>
            <div className="text-wrapper">{titre}</div>

        </div>
    )
}