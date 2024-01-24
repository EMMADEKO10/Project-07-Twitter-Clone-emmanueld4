import Header from '../components/header/header'
import TweetEditor from './TimeLine/tweet_editor/TweetEditor';
import Tweets from './TimeLine/Tweets';

function Timeline() {
  return (
    <div className='flex-0 flex-shrink-0 w-700 font-sans border-l border-solid border-gray-700 border-r'>
      <Header />
      <TweetEditor />
      <Tweets />
    </div>
  );
}

export default Timeline;