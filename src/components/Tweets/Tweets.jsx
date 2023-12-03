import Tweet from './Tweet';
import { dataTweets } from '../../Data-tweet/dataTweet';

export default function Tweets() {
  return (

    <div className="tweets">
      {dataTweets.map((tweet) => (
        <Tweet key={tweet.id} tweet={tweet}  />
      ))}
    </div>

  );
};

