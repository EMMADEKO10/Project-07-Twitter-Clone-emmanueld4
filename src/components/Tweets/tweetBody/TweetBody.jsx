import TweetTitle from "./tweet-title"
import TweetText from './tweet-Text'

export default function TweetBody({ tweet }) {
    return (
        <div className='tweet-body'>

            <TweetTitle tweet ={tweet}/>
            <TweetText tweet = {tweet}/>
           
            {tweet.tweetImage && <div className="tweet-image"> <img src={tweet.tweetImage} alt="" /></div>}
            
        </div>
    )
}
