import React from 'react';
// import TweetAction from './TweetAction';

const tweetActions = [
    {
      // id: 1,
      details: '234k'
    
    },
    {
      // id: 2,
      details: '3M',
  
    },
    {
      // id: 3,
      details: '200k',
    },
  
];



export default function TweetActions() {
    return (
      <div className="">
        {tweetActions.map((tweetAction) => (
          <TweetAction details={tweetAction.details}/>
          ))} 
      </div>
    );
  };
  

