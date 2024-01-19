import React, { useState } from 'react';
import TweetAction from './TweetAction';
import { useContext, useEffect } from 'react';
import { TweetsContext } from '../../../App';


export default function TweetActions({ tweet }) {
  const urlcommentaire = "M11.705 1.86835L8.24834 1.86002H8.24667C4.60167 1.86002 1.74667 4.71585 1.74667 8.36168C1.74667 11.7767 4.40167 14.3667 7.96751 14.5033V17.6933C7.96751 17.7833 8.00417 17.9317 8.06751 18.0292C8.18584 18.2167 8.38751 18.3183 8.59417 18.3183C8.70917 18.3183 8.82501 18.2867 8.92917 18.22C9.14917 18.08 14.3233 14.77 15.6692 13.6317C17.2542 12.29 18.2025 10.3233 18.205 8.37168V8.35752C18.2 4.71835 15.3467 1.86835 11.705 1.86752V1.86835ZM14.8608 12.6783C13.9158 13.4783 10.8092 15.5159 9.21751 16.5475V13.8917C9.21751 13.5467 8.93834 13.2667 8.59251 13.2667H8.26251C5.21251 13.2667 2.99751 11.2034 2.99751 8.36168C2.99751 5.41668 5.30417 3.11002 8.24751 3.11002L11.7033 3.11835H11.705C14.6483 3.11835 16.955 5.42335 16.9567 8.36502C16.9542 9.95668 16.1717 11.5683 14.8617 12.6783H14.8608Z"
  const urllike = "M19.8083 13.0583C19.565 12.8142 19.1692 12.8142 18.925 13.0583L17.075 14.9083V6.37499C17.075 4.65166 15.6725 3.24999 13.95 3.24999H9.07501C8.73001 3.24999 8.45001 3.52999 8.45001 3.87499C8.45001 4.21999 8.73001 4.49999 9.07501 4.49999H13.95C14.9833 4.49999 15.825 5.34166 15.825 6.37499V14.9083L13.975 13.0583C13.7308 12.8142 13.335 12.8142 13.0917 13.0583C12.8483 13.3025 12.8467 13.6983 13.0917 13.9417L16.0083 16.8583C16.1292 16.9808 16.2892 17.0417 16.45 17.0417C16.6108 17.0417 16.7692 16.9817 16.8917 16.8583L19.8083 13.9417C20.0533 13.6983 20.0533 13.3025 19.8083 13.0583ZM10.925 15.7917H6.05001C5.01667 15.7917 4.17501 14.95 4.17501 13.9167V5.38332L6.02501 7.23332C6.14834 7.35582 6.30834 7.41666 6.46834 7.41666C6.62834 7.41666 6.78834 7.35582 6.91001 7.23332C7.15417 6.98916 7.15417 6.59332 6.91001 6.34999L3.99334 3.43332C3.74917 3.18832 3.35334 3.18832 3.11001 3.43332L0.19334 6.34999C-0.0516599 6.59332 -0.0516599 6.98916 0.19334 7.23332C0.43834 7.47749 0.832507 7.47749 1.07667 7.23332L2.92667 5.38332V13.9167C2.92667 15.64 4.32917 17.0417 6.05167 17.0417H10.9267C11.2717 17.0417 11.5517 16.7617 11.5517 16.4167C11.5517 16.0717 11.2708 15.7917 10.9267 15.7917H10.925Z"
  const urlretweet = "M11 19.638H10.986C8.40295 19.59 0.949951 12.856 0.949951 6.478C0.949951 3.414 3.47495 0.723999 6.35295 0.723999C8.64295 0.723999 10.183 2.304 10.999 3.454C11.813 2.306 13.353 0.723999 15.644 0.723999C18.524 0.723999 21.048 3.414 21.048 6.479C21.048 12.855 13.594 19.589 11.011 19.636H11V19.638ZM6.35395 2.225C4.27395 2.225 2.45095 4.213 2.45095 6.48C2.45095 12.22 9.48495 18.076 11.001 18.138C12.519 18.076 19.551 12.221 19.551 6.48C19.551 4.213 17.728 2.225 15.648 2.225C13.12 2.225 11.708 5.161 11.696 5.19C11.466 5.752 10.54 5.752 10.309 5.19C10.295 5.16 8.88395 2.225 6.35495 2.225H6.35395Z"
  const urlrepley_tweet = "M21.6083 13.225L17.4417 9.05834C17.1975 8.81417 16.8017 8.81417 16.5583 9.05834L12.3917 13.225C12.1467 13.4692 12.1467 13.865 12.3917 14.1083C12.6367 14.3517 13.0308 14.3533 13.275 14.1083L16.375 11.0083V19.5C16.375 19.845 16.655 20.125 17 20.125C17.345 20.125 17.625 19.845 17.625 19.5V11.0083L20.725 14.1083C20.8467 14.2308 21.0067 14.2917 21.1667 14.2917C21.3267 14.2917 21.4867 14.2317 21.6083 14.1083C21.8525 13.8642 21.8525 13.4692 21.6083 13.225Z"
  const urlrepley_tweet2 = "M23.4233 25.2867H10.5767C9.52334 25.2867 8.66667 24.43 8.66667 23.3767V18.6667C8.66667 18.3217 8.94667 18.0417 9.29167 18.0417C9.63667 18.0417 9.91667 18.3217 9.91667 18.6667V23.3767C9.91667 23.7408 10.2125 24.0367 10.5767 24.0367H23.4233C23.7875 24.0367 24.0833 23.7408 24.0833 23.3767V18.6667C24.0833 18.3217 24.3633 18.0417 24.7083 18.0417C25.0533 18.0417 25.3333 18.3217 25.3333 18.6667V23.3767C25.3333 24.43 24.4767 25.2867 23.4233 25.2867Z"
  const urllikedRed = "M9.49895 19C13.3967 17.2256 16.2176 14.1965 17.7392 11.1294C19.2374 8.07497 19.4481 5.0332 18.1138 3.20814C16.9082 1.57318 15.3397 0.952155 13.7478 1.00285C12.156 1.05355 10.6109 1.80132 9.49895 2.85326C8.38698 1.80132 6.84194 1.05355 5.25007 1.00285C3.6582 0.952155 2.08975 1.57318 0.884141 3.20814C-0.450218 5.0332 -0.23953 8.07497 1.28211 11.1294C2.78033 14.1965 5.60122 17.2256 9.49895 19Z"
  
  const { isLikeClick, setIsLikeClick } = useContext(TweetsContext);
  const { numberLike, setNumberLike } = useContext(TweetsContext);
  
  const { dataTweetAction } = tweet;
  
  const [tweetAction, setTweetAction] = useState({
    likes: dataTweetAction.like,
    commentaires: dataTweetAction.commentaires,
    retweets: dataTweetAction.retweets,
    colorFill: "#6E767D",
    url: urlretweet,
    isLiked: isLikeClick,
  });
 
  const incrementLike = () => {
    setTweetAction(prevState => ({
      ...prevState,
      likes: prevState.isLiked ? prevState.likes - 1 : prevState.likes + 1,
      colorFill: prevState.isLiked ? "#6E767D" : "#FF0000",
      url: prevState.isLiked ? urlretweet : urllikedRed,
      isLiked: !prevState.isLiked,
    }));
    
    if (tweetAction.isLiked) {
      setNumberLike(tweetAction.likes)
      console.log("Premiere conditon True :", tweetAction.likes );
      // console.log("Premiere conditon :", tweetAction.likes );
    }else{
      setNumberLike(dataTweetAction.like)
      console.log("Deuxieme conditon True :", dataTweetAction.like);
      // console.log("Deuxieme conditon :", tweetAction.likes - 1);
    }
    
    dataTweetAction.isLike = !tweetAction.isLiked;
    setIsLikeClick(!tweetAction.isLiked);
    // dataTweetAction.like.push(numberLike+1);
  };

  return (
    <div className="tweet-actions" >
      <TweetAction className={"tweet-action action-tweet-effet"} colorFill={"#6E767D"} url={urlcommentaire} action={dataTweetAction.commentaire} tweet={tweet} />
      <TweetAction className={"tweet-action action-tweet-retweet"} colorFill={"#6E767D"} url={urllike} action={dataTweetAction.retweet} tweet={tweet} />
      {<TweetAction className={"tweet-action action-tweet-like"} colorFill={tweetAction.colorFill} IsLikedInc={tweetAction.isLiked} url={tweetAction.url} action={tweetAction.likes} eventOfClick={incrementLike} tweet={tweet} />}
      <TweetAction className={"tweet-action action-tweet-effet"} colorFill={"#6E767D"} url={urlrepley_tweet} url2={urlrepley_tweet2} tweet={tweet} />    
    </div>
  );

}