import { React, useState } from 'react';
import TweetAction from './TweetAction';
export default function TweetActions({ tweet }) {

  const { dataTweetAction } = tweet;

  const [likes, setLikes] = useState(dataTweetAction.like);
  const [commentaires, setCommentaires] = useState(dataTweetAction.commentaire);
  const [retweets, setRetweets] = useState(dataTweetAction.retweet);


  const incrementLike = () => {
    setLikes(dataTweetAction.like + 1)
  }

  const incrementCommentaire = () => {
    setCommentaires(dataTweetAction.commentaire + 1)
    // {console.log("La valeur de dataTweetAction.commentaire",dataTweetAction.commentaire + 1 )}
  }

  const incrementRetweet = () => {
    setRetweets(dataTweetAction.retweet + 1)
  }

  return (
      
    <div className="tweet-actions">
      {console.log("La valeur de dataTweetAction.commentaire",dataTweetAction.commentaire )}
      
      <TweetAction logo = {dataTweetAction.logoActionCommentaire} action = {commentaires}   eventOfClick={incrementCommentaire} />
      <TweetAction logo = {dataTweetAction.logoActionRetweet} action = {retweets} eventOfClick = {incrementRetweet}/>
      <TweetAction  logo = {dataTweetAction.logoActionLike}  action = {likes}  eventOfClick = {incrementLike}/>
      <TweetAction  logo = {dataTweetAction.logoActionDownloard}   />

    </div>
  )
}