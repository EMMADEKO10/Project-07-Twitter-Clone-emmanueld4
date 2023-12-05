import Header from '../components/header/header'
import TweetEditor from './tweet_editor/TweetEditor';
import Tweets from './Tweets/Tweets';
function Timeline() {
  return (
    <div className='timeline'>
      <Header />
      <TweetEditor />
      <Tweets />
    </div>
  );
}

export default Timeline;