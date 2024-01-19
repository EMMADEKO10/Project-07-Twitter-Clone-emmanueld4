
export default function TweetTitle({tweet}) {
    return (
        < div className="tweet-title" >
            {tweet.tweetTitle}
            < img src="src\images\Verified.png" alt="" />
            {/* {tweet.tweetTitleDetails} */}
            <div className="tweet-title-author">
                {tweet.tweetTitleAuthor}
            </div>
            <div className="tweet-title-details ">
                {tweet.tweetTitleDetails}
            </div>
        </div>
    )
}



