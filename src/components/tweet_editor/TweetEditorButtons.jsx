import {dataTweets} from "../../Data-tweet/dataTweet";
import { useContext } from "react";
import { useState,useEffect } from "react";
import { TweetsContext } from "../../App";


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
    const a = 232;
// ------------------------------------------------------------------------
    // const addTimeToTweet = (tweet) => {
    //     // Obtenez l'heure actuelle
    //     const now = Date.now();

    //     // Créez un objet `Date` avec l'heure actuelle
    //     const createdAt = new Date(now);

    //     // Ajoutez l'heure au tweet
    //     tweet.createdAt = createdAt;

    //     // Retournez le tweet mis à jour
    //     return tweet;
    // };

    // // Utilisez la fonction pour ajouter l'heure au tweet
    // const tweet = {
    //     id: 1,
    //     user_id: 1,
    //     content: 'Hello, world!',
    // };

    // const updatedTweet = addTimeToTweet(tweet);

    // console.log(updatedTweet);
    // {
    //   id: 1,
    //   user_id: 1,
    //   content: 'Hello, world!',
    //   createdAt: 2023-08-03T10:00:00.000Z,
    // }
    // -----------------------------------------------------------------------------------
    function handleAddTweet() {
        // const now = Date.now();
       const now =  new Date();

        const seconds = now.getSeconds();
        const second = seconds < 100 ? 'instant' : seconds;
        const newTweet = {
            id:dataTweet.length+1, // Générer un nouvel identifiant unique
            user_id: 1, // Utiliser le premier utilisateur par défaut
            tweetTitle: 'Bradley Ortiz', // Vous pouvez personnaliser le titre
            tweetAvatar: 'src/images/profile-photo.png', // Définissez l'avatar si nécessaire
            tweetTitleAuthor: '@Bradley Ortiz . ',
            tweetTitleDetails: second, // Personnalisez les détails du titre
            content: inputtextnew,
            createdAt: seconds < 100 ? 'instant':seconds,
            dataTweetAction: {
                tweetId:0,
                commentaire: 0,
                retweet: 0,
                like: 0,
            },
        };
        console.log("Nouveau Tweet en Action : ", newTweet.createdAt);
        // console.log("Nouveau Tweet en Action : ", dataTwitter);
       
        // ------------------------
        // setDataTweets([newTweet,...dataTweets]);
        setDataTweets([...dataTweet, newTweet]); // Mettre à jour l'état avec le nouveau tweet


    
        dataTweet.unshift(newTweet);
        // dataTweet.push(newTweet);

        // setDataTweets(dataTweets);
    };

    // console.log("je vous transmet les messages : ", valueInputText);
    // console.log("je vous transmet les messages : ", dataTweets);


    return (
        <div>
            <button onClick={handleAddTweet} id = "monBouton" className="button btnNavigation">Tweet</button>
        </div>

    );
}


