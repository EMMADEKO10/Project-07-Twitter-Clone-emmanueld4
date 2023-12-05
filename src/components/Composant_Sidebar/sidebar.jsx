
// import TweetEditorButtons from './../tweet_editor/TweetEditorButtons';
import { Button } from './../tweet_editor/TweetEditorButtons';
// import { NavLink } from "react-router-dom";


export default function Sidebar() {
    return (

        <div class="sidebar">




            <Navigation logo={"src/images/image Page 2/Icons/Twitter.png"} titre="" />
            <Navigation logo={"src/images/image Page 2/Icons/Home-Fill.svg"} titre="Home" />
            <Navigation logo={"src/images/image Page 2/Icons/Explore.svg"} titre="Explore" />
            <Navigation logo={"src/images/image Page 2/Icons/Notifications.svg"} titre="Notifications" />
            <Navigation logo={"src/images/image Page 2/Icons/Messages.svg"} titre="Messages" />
            <Navigation logo={"src/images/image Page 2/Icons/Bookmarks.svg"} titre="Bookmarks" />
            <Navigation logo={"src/images/image Page 2/Icons/Lists.svg"} titre="Lists" />

            {/* <NavLink to='/Profil'> */}
                <Navigation  logo={"src/images/image Page 2/Icons/Profile.svg"} titre="Profils" />
            {/* </NavLink> */}
            {/* lien={'/profil'} */}

            {/* <Navigation logo={"src/images/image Page 2/Icons/Profile.svg"} titre="Profils" /> */}
            <Navigation logo={"src/images/image Page 2/Icons/More.svg"} titre="More" />
            <Button />
            {/* <Navigation logo = {"src/images/profile-photo.png"}  titre ={ <TitreProfilSidebar/>}/>   */}
            <TitreProfilSidebar />
        </div>
    )
}

function TitreProfilSidebar() {
    return (
        <div className='menu-button-normal'> 
            <span><img className="icons-home-fill" src="src/images/profile-photo.png" alt="" /></span>
            <div className='textProfilSidebar'>
                <div>Bradley Ortiz</div>
                <p >@Bradley_</p>
            </div>

           
        </div>
    )
}

export function Navigation({ logo, titre }) {
    return (
        <div className="menu-button-normal menu-button-normal-magine">
            <span><img className="icons-home-fill" src={logo} alt="" /></span>
            <div className="text-wrapper">{titre}</div>
            {/* <NavLink to ={lien} ></NavLink> */}
        </div>
    )
}