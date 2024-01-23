import Sidebar from "../components/sidebar"
import Trends from "../components/trends";
// import { users } from "../Data-tweet/dataCompte";
import { useContext } from "react";
import TweetsContext from "../context";
import Tweet from "../components/Tweets/Tweet";
import { useParams } from "react-router-dom";

function Profil() {
    
    const { filteredTweets } = useContext(TweetsContext);;
    const { currentAccount, currentUser } = useContext(TweetsContext);
    const { dataTweet, setDataTweets } = useContext(TweetsContext);
    const { id } = useParams();
    
    return (
        <>
            <Sidebar />
            <main className='main'>

                <div className="timeline">
                    
                    <ProfilHeader style={{ backgroundImage: dataTweet.currentUser[currentUser].imageBackground }} />

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
                        <p>{dataTweet.currentUser[currentUser].details}</p>
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
    const { dataTweet, setDataTweets } = useContext(TweetsContext);
    const { filteredTweets } = useContext(TweetsContext);
    const { currentAccount, currentUser } = useContext(TweetsContext);
    return (
        <header style={style} className="ContenairImage">
            <img src={dataTweet.currentUser[currentUser].avatar} alt="" />
        </header>
    )
}

function TweetDetails() {
    const { dataTweet, setDataTweets } = useContext(TweetsContext);
    const { currentAccount, currentUser } = useContext(TweetsContext);
    return (
        <div className="tweet-content-follow pl-6 mt-0">

            <div className="avatar-follow">
                <img className="icons-home-fill" src={dataTweet.currentUser[currentUser].avatar} alt="" />
            </div>
            <div className="tweet-details">
                <div className="tweet-title-follow"> <div>{dataTweet.currentUser[currentUser].name} </div><img src="\images\Verified.png" alt="" /></div>
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



