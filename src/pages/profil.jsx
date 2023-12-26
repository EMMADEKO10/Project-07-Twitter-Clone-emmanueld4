import Sidebar from "../components/sidebar"
// import Timeline from "../components/timeLine"
import Trends from "../components/trends";
import { users } from "../Data-tweet/dataCompte";
import { useContext } from "react";
import { TweetsContext } from "../App";
import Tweet from "../components/Tweets/Tweet";
import { currentUser } from "../components/Tweets/TweetAvatar";

// const dataProfilUser = [
//     {
//         id: 1,
//         name: "@CNN",
//         imageBackground: 'url("src/images/profile-photo.png")',
//         ProfilPhoto: "src/images/profile-photo.png",
//         biographie: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto cupiditate eum expedita debitis.",
//         // lien: 

//         // "It's our job to <a href="#">#GoThere</a> & tell the most difficult stories. For breaking news, follow <a href="#">@CNNBRK</a> and download our app <a href="#">cnn.com/apps</a> .",
//         details: "It's our job to" + <a href="#">#GoThere</a> + "& tell the most difficult stories. For breaking news, follow" + <a href="#">@CNNBRK</a> + "and download our app" + <a href="#">cnn.com/apps</a>,
//         // <a href="#">#GoThere</a>
//         numberAbonnees: 1230,
//         nombreDeTweets: 56789,
//         nombreAbonnement: 2334
//     },
//     {
//         id: 2,
//         name: "@Deko Emmanuel",
//         imageBackground: 'url("src/images/Emmanuel-Deko.jpg")',
//         ProfilPhoto: "src/images/profile-photo.png",
//         biographie: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto cupiditate eum expedita debitis.",
//         // lien: 
//         // "It's our job to <a href="#">#GoThere</a> & tell the most difficult stories. For breaking news, follow <a href="#">@CNNBRK</a> and download
//         details: "It's our job to" + <a href="#">#GoThere</a> + "& tell the most difficult stories. For breaking news, follow" + <a href="#">@CNNBRK</a> + "and download our app" + <a href="#">cnn.com/apps</a>,
//         // <a href="#">#GoThere</a>
//         numberAbonnees: 1230,
//         nombreDeTweets: 56789,
//         nombreAbonnement: 2334
//     }
//  ]

function Profil() {
    const context2 = useContext(TweetsContext);
    const { filteredTweets } = context2; 
    console.log("DEKO : EXEPTIONS : ",users[currentUser]);
    return (
        <>
            <Sidebar />
            <main className='main'>

                <div className="timeline">
                    <ProfilHeader style={{ backgroundImage: users[currentUser].imageBackground }} />

                    <div>
                        <div className="profil-navigation">
                            <ul>
                                <li><img src="src/images/image Page 2/Icons/More.svg" alt="" /></li>
                                <li><button className="btnWhiteTweet">Follow</button></li>
                            </ul>
                        </div>

                    </div>

                    <TweetDetails />
                    
                    <div className="smalldetails">
                        <p>{users[currentUser].details}</p>
                        <a href="#">Traduire la biographie.</a>
                    </div>
                    
                    <nav className="navListTweet">
                        <ul className="small-text">
                            <li>Posts </li>
                            <li> Affiliés</li>
                            <li> Réponses</li>
                            <li>Médias</li>
                            <li>J'aime</li>
                        </ul>
                    </nav>   
                    <div className="tweets">
                        {filteredTweets.map((filteredTweet) => (
                            <Tweet key={filteredTweet.id} tweet={filteredTweet} /> 
                        ))}
                    </div> 
                </div>
            </main>
            <Trends page="profil" />
            
        </>
    )
}

function ProfilHeader({ style }) {
    return (
        <header style={style} className="ContenairImage">

            <img src={users[currentUser].avatar} alt="" />

        </header>
    )
}

function TweetDetails() {
    return (
        <div className="tweet-content-follow pl-6 mt-0">

            <div className="avatar-follow">
                <img className="icons-home-fill" src={users[currentUser].avatar} alt="" />
            </div>
            <div className="tweet-details">
                <div className="tweet-title-follow"> <div>{users[currentUser].name} </div><img src="src\images\Verified.png" alt="" /></div>
                <p>@new time</p>
            </div>
            <Biography />
        </div>
    )
}

function Biography() {
    return (
        <div className="biography">
            <div className="flex-line">
                <a href="#">cnn.com</a>
                <p className="small-text">A rejoint Twitter en fevrier 2007</p>
            </div>
            <div className="flex-line">
                <p>1080 <span className="small-text">abonnements</span> </p>
                <p >62M <span className="small-text">abonnés</span></p>
            </div>
            <div className="flex-line">
                <p className="small-text">Suivi par Benito et PlayStation</p>
            </div>
        </div>
    )
}

export default Profil;



