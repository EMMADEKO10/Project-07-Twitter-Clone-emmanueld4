import Tweet from './Tweet';
import { FaTwitter } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";

const tweets = [
  {
    id: 1,
    tweetTitle: 'CNN',
    tweetAvatar: <img className='tweet-avatar' src='src/images/tweet-profile-photo.png' alt="Ava" />,
    tweetTitleDetails: <div className='tweet-title-details'>@CNN . 5min</div>,
    content: 'President Joe Biden touted a new agreement reached whit the European Union to ease Trump-era tariffs on aluminum and steel as a "major breackthrough" that would serve to both strengthen the US steel industry and combat the global climate crisis.',
    commentaires: '57',
    retweet: '144',
    like: '1114'
  },
  {
    id: 2,
    content: 'Gardening boomed during the pandemic. Six Black writers share how has helped them re-establish, and reimagine, a connection to cultivation and the land',
    tweetTitle: 'The new York time',
    tweetImage: <img src='src/images/tweet-image.png' alt="" />,
    tweetTitleDetails: <div className='tweet-title-details'>@nytimes . 2h</div>,
    tweetAvatar: <img src='src\images\Profile-Photo-new-york.png' alt="" />,
    commentaires: '19',
    retweet: '48',
    like: '482',
   
  },
  {
    id: 3,
    content: 'BIG NEWS lol jk still Twitter',
    tweetTitle: 'Twitter',
    tweetTitleDetails: <div className='tweet-title-details'>@Twitter . Oct 29</div>,
    tweetAvatar: <img src='src/images/logo-rond-twitter-1536x1536.png ' alt="" />,
    commentaires: '6.8K',
    retweet: '36.6K',
    like: '267.1K'

  },

  {
    id: 4,
    content: 'hello literally everyone',
    tweetTitle: 'Twitter',
    tweetTitleDetails: <div className='tweet-title-details'>@Twitter . Oct 29</div>,
    tweetAvatar: <img src='src/images/logo-rond-twitter-1536x1536.png ' alt="" />,
    commentaires: '118.7K',
    retweet: '785.4K',
    like: '3.3M'
  },

  {
    id: 5,
    content: 'hello literally everyone',
    tweetTitle: 'Twitter',
    tweetAvatar: <img src='src/images/logo-rond-twitter-1536x1536.png ' alt="" />,
    tweetTitleDetails: <div className='tweet-title-details'>@Twitter . Oct 29</div>,
    retweet: '385.4K',
    like: '1.3M',
    commentaires: '465.3K',
  }
];

const Tweets = () => {
  return (
    <div className="tweets">
      {tweets.map((tweet) => (
        <Tweet key={tweet.id} content={tweet.content} author={tweet.author} tweetTitle={tweet.tweetTitle} tweetImage={tweet.tweetImage} tweetAvatar={tweet.tweetAvatar} tweetTitleDetails={tweet.tweetTitleDetails} commentaires = {tweet.commentaires} like = {tweet.like} retweet = {tweet.retweet} />
      ))}
    </div>
  );
};

export default Tweets;





























