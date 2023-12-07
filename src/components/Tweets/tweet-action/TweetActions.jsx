import React, { useState } from 'react';
import TweetAction from './TweetAction';


export default function TweetActions({ tweet, color }) {
  const { dataTweetAction } = tweet;


  const [tweetAction, setTweetAction] = useState({
    likes: dataTweetAction.like,
    commentaires: dataTweetAction.commentaires,
    retweets: dataTweetAction.retweets,
    isLiked: false,
    isCommentaires: false,
    isRetweets: false
  });

  const incrementLike = () => {
    setTweetAction(prevState => ({
      ...prevState,
      likes: prevState.isLiked ? prevState.likes - 1 : prevState.likes + 1,
      isLiked: !prevState.isLiked,

    }));

  };

  // const incrementCommentaire = () => {
  // setTweetAction(prevState => ({
  // ...prevState,
  // commentaires: prevState.commentaires + 1
  // }));
  // };

  // const incrementRetweet = () => {
  // setTweetAction(prevState => ({
  // ...prevState,
  // retweets: prevState.retweets + 1
  // }));
  // }; action={tweetAction.commentaires}   action={tweetAction.retweets}

  return (
    <div className="tweet-actions" >
      <TweetAction className="commentaireColor" logo={dataTweetAction.logoActionCommentaire} action={dataTweetAction.commentaire} />
      <TweetAction className="commentaireColor" logo={dataTweetAction.logoActionRetweet} action={dataTweetAction.retweet} />
      <TweetAction className="commentaireColor" logo={dataTweetAction.logoActionLike} action={dataTweetAction.like} eventOfClick={incrementLike} />
      <TweetAction className="commentaireColor" logo={dataTweetAction.logoActionDownloard} />
    </div>
  );
}
