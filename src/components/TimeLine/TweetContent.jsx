import TweetBody from "./tweetBody/TweetBody"
import TweetActions from "./tweet-action/TweetActions"

export default function TweetContent({ tweet }) {
    return (
        <div className="flex flex-col items-start justify-start gap-30 w-full">
            <TweetBody tweet={tweet} />
            <TweetActions tweet={tweet} />
        </div>
    )
}