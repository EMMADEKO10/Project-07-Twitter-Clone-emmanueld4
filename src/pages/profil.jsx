import Sidebar from "../components/sidebar/sidebar"
import Trends from "../components/Trend/trends";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import TweetsContext from "../context";
import Tweet from "../components/TimeLine/Tweet";
import { useParams } from "react-router-dom";

function Profil() {

    const { filteredTweets } = useContext(TweetsContext);;
    const { currentAccount, currentUser } = useContext(TweetsContext);
    const { Data, setData } = useContext(TweetsContext);
    const { id } = useParams();

    return (
        <>
            <Sidebar />
            <main className='main'>

                <div className="timeline">

                    <div className="flex items-center self-stretch justify-start gap-5 p-1 border-b border-solid border-gray-700">
                        <NavLink to='/'><img className="size-xl" src="/images/arrow-left-solid (3).svg" alt="Retour" /></NavLink>
                        <div className="flex-col justify-start items-start gap-2 ">
                            <div className="flex justify-start items-start gap-2 text-base font-[700]">
                                {Data.tweets[currentUser].tweetTitle}
                                <img className="w-6 h-auto" src="/images/Verified.png" alt="" />
                            </div>
                            <div className="font-[400] text-gray-600">
                                {filteredTweets.length + " Posts"}
                            </div>
                        </div>
                    </div>
                    <ProfilHeader style={{ backgroundImage: Data.currentUser[currentUser].imageBackground }} />

                    <div>
                        <div className="profil-navigation">
                            <ul>
                                <li><img src="/images/image Page 2/Icons/More.svg" alt="" /></li>
                                <li><button className="btnWhiteTweet">Follow</button></li>
                            </ul>
                        </div>
                    </div>

                    <TweetDetails />

                    <div className="smalldetails">
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
    const { Data } = useContext(TweetsContext);
    const { currentUser } = useContext(TweetsContext);
    return (
        <header style={style} className="ContenairImage">
            <div className="ContenairImage"><img className="" src={Data.currentUser[currentUser].avatar} alt="" /></div>
        </header>
    )
}

function TweetDetails() {
    const { Data } = useContext(TweetsContext);
    const { currentUser } = useContext(TweetsContext);
    return (
        <div className="tweet-content-follow pl-6 mt-0">
            <div className="tweet-details">
                <div className="tweet-title-follow flex">
                    <div className="text-[23] text-base font-[700]">{Data.currentUser[currentUser].name} </div>
                    <img src="\images\Verified.png" alt="" /></div>
                <p>@new time</p>
            </div>
            <Biography />
        </div>
    )
}

function Biography() {
    const { Data, setData } = useContext(TweetsContext);
    const { currentAccount, currentUser } = useContext(TweetsContext);
    return (
        <div className="biography">
            <div className="flex-line">
                <a href="#">{Data.currentUser[currentUser].name}.com</a>
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



