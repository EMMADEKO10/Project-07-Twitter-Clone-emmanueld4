import {dataTweets} from "../../Data-tweet/dataTweet";
import { useContext } from "react";
import { useState,useEffect } from "react";
import TweetsContext from "../../context";


export default function TweetEditorButtons({ setvalueInputText, valueInputText }) {
    return (
        <div className="tweet-editor-buttons">
            <TweetEditorActions  />
            <Button setvalueInputText={setvalueInputText} valueInputText={valueInputText} />
        </div>
    );
}
function TweetEditorActions() {

    return (

        <div className="tweet-editor-actions">
            <img src="src\images\Media.svg" alt="" />
            <img src="src\images\Gif.svg" alt="" />
            <img src="src\images\Poll.svg" alt="" />
            <img src="src\images\Group.svg" alt="" />
            <img src="src\images\Schedule (1).svg" alt="" />
        </div>
    );
}
export function Button({ setvalueInputText, valueInputText}) {

    const { dataTweet, setDataTweets } = useContext(TweetsContext);
       
    const inputtextnew = valueInputText;
    // -----------------------------------------------------------------------------------
    function handleAddTweet() {
        // const now = Date.now();
       const now =  new Date();

        const seconds = now.getSeconds();
        const second = seconds < 100 ? 'instant' : seconds;
        const newTweet = {
            "id":dataTweet.tweets.length+1, // Générer un nouvel identifiant unique
            "user_id": 1, // Utiliser le premier utilisateur par défaut
            "tweetTitle": 'Bradley Ortiz', // Vous pouvez personnaliser le titre
            "tweetAvatar": 'src/images/profile-photo.png', // Définissez l'avatar si nécessaire
            "tweetTitleAuthor": '@Bradley Ortiz . ',
            "tweetTitleDetails": second, // Personnalisez les détails du titre
            "content": inputtextnew,
            "createdAt": seconds < 100 ? 'instant':seconds,
            "tweetId":0,
            "commentaire": 0,
            "retweet": 0,
            "like": 0,
            "urlretweet": "M11 19.638H10.986C8.40295 19.59 0.949951 12.856 0.949951 6.478C0.949951 3.414 3.47495 0.723999 6.35295 0.723999C8.64295 0.723999 10.183 2.304 10.999 3.454C11.813 2.306 13.353 0.723999 15.644 0.723999C18.524 0.723999 21.048 3.414 21.048 6.479C21.048 12.855 13.594 19.589 11.011 19.636H11V19.638ZM6.35395 2.225C4.27395 2.225 2.45095 4.213 2.45095 6.48C2.45095 12.22 9.48495 18.076 11.001 18.138C12.519 18.076 19.551 12.221 19.551 6.48C19.551 4.213 17.728 2.225 15.648 2.225C13.12 2.225 11.708 5.161 11.696 5.19C11.466 5.752 10.54 5.752 10.309 5.19C10.295 5.16 8.88395 2.225 6.35495 2.225H6.35395Z",
            "urllikedRed": "#6E767D",
            "isLike": "false"
            }
       
        console.log("Nouveau Tweet en Action : ", newTweet.createdAt);
        // console.log("Nouveau Tweet en Action : ", dataTwitter);
       
        // ------------------------
        const updatedTweets = [...dataTweet.tweets];
        updatedTweets.unshift(newTweet);

        // Mettez à jour le contexte avec les nouveaux tweets
        setDataTweets({ ...dataTweet, tweets: updatedTweets })
       
        // setDataTweets([...dataTweet.tweets, newTweet]); // Mettre à jour l'état avec le nouveau tweet
    
        
  
    };

    return (
        <div>
            <button onClick={handleAddTweet} id = "monBouton" className="button btnNavigation">Tweet</button>
        </div>

    );
}


