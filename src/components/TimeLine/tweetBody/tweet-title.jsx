
export default function TweetTitle({tweet}) {
    return (

        <div className="flex justify-start items-start gap-2 text-base font-[700]">
            {tweet.tweetTitle}
            <img className="w-6 h-auto" src="/images/Verified.png" alt="" />
            <div className="text-base font-[500]">
                {tweet.tweetTitleAuthor}
            </div>
            <div className="text-gray-600 font-[400]">
                {tweet.tweetTitleDetails}
            </div>
        </div>

        // < div className="tweet-title" >
        //     {tweet.tweetTitle}
        //     < img src="\images\Verified.png" alt="" />

        //     <div className="tweet-title-author">
        //         {tweet.tweetTitleAuthor}
        //     </div>
        //     <div className="tweet-title-details ">
        //         {tweet.tweetTitleDetails}
        //     </div>
        // </div>
    )
}



