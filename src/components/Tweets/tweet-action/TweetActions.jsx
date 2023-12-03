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
  }

  const incrementRetweet = () => {
    setRetweets(dataTweetAction.retweet + 1)
  }

  return (

    <div className="tweet-actions">
      <TweetAction logo = {dataTweetAction.logoActionCommentaire} action = {dataTweetAction.commentaire}   eventOfClick={incrementCommentaire} />
      <TweetAction logo = {dataTweetAction.logoActionRetweet} action = {dataTweetAction.retweet} eventOfClick = {incrementRetweet}/>
      <TweetAction  logo = {dataTweetAction.logoActionLike}  action = {dataTweetAction.like}  eventOfClick = {incrementLike}/>
      <TweetAction  logo = {dataTweetAction.logoActionDownloard}   />

    </div>
  )
}