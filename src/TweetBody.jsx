
export default function TweetBody() {
    return (
        <div className='tweet-body'>
            <TweetTitle />
            <TweetText />
            <TweetImage />
        </div>

    )
}

export function TweetText() {
    return (
        <div className="tweet-text">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos, alias.
            {/* <p>{this.props.tweet.text}</p> */}
        </div>
    )
}

export function TweetImage(){
    return(
        <div className='tweet-image'></div>
    )
}


export function TweetTitle () {
    return <h2 className='tweet-title'>Tweet Title</h2>;
  };
 
 
  