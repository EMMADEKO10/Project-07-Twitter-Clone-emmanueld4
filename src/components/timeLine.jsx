import React from 'react';
import Header from './header';
import TweetEditor from './TweetEditor';
import Tweets from './Tweets';

function Timeline() {
  return (
    <div className="timeline">
      <Header />
      <TweetEditor />
      <Tweets />
    </div>
  );
}

export default Timeline;