
// Ce fichier contient plusieurs composant.

import { Button } from '../TimeLine/tweet_editor/TweetEditorButtons';
import { NavLink } from "react-router-dom";
// import { users } from "../Data-tweet/dataCompte";
import { useContext } from "react";
import TweetsContext from '../../context';

export default function Sidebar() {

    const { filteredTweets, setFilteredTweets } = useContext(TweetsContext);
    const { currentAccount, setCurrentAccount } = useContext(TweetsContext);
    const { currentUser, setCurrentUser } = useContext(TweetsContext);
    const { Data, setData} = useContext(TweetsContext);
    const profilePath = `/profil/${encodeURIComponent(Data.currentUser[0].name)}`;
    //    -------------------------------------------------------------------------------------

    const handleClick = () => {

        let filteredTweets = Data.tweets.slice();
        const currentUserIdIndex = Data.currentUser.findIndex((user) => user.id === 1);
        setCurrentUser(currentUserIdIndex);
        // currentAccount = currentUserIdIndex;
        setCurrentAccount(currentAccount);
        filteredTweets = filteredTweets.filter((tweet) => tweet.user_id === 1);
        setFilteredTweets(filteredTweets);

    };

    return (

        <div className="sidebar">
            <div className='sidebarNav pl-10'>

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

        <div className='mt-20' >
            <div className="flex items-center gap-10">
                <div className="flex items-center justify-center p-0 m-0">
                    <div>
                        <img className="size-10 icons-home-fill" src="/images/profile-photo.png" alt="" />
                    </div>
                    <div className="flex-col items-center justify-center tweet-details">
                        <div className="tweet-title-follow"> <div>Bradley Ortiz </div> < img src="\images\image Page 2\Icons\Market_Pri.png" alt="" /></div>
                        <p>@Bradley_</p>
                    </div>
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