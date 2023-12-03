import TweetBody from "./tweetBody/TweetBody"
import TweetActions from "./tweet-action/TweetActions"

export default function TweetContent({ tweet }) {
    return (
        <div className="tweet-content">
            <TweetBody tweet={tweet} />
            <TweetActions tweet={tweet} />
        </div>
    )
}