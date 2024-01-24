import React from 'react';
import Timeline from './../components/timeLine';
import Sidebar from '../components/sidebar/sidebar';
import Trends from '../components/Trend/trends';

function Home() {
  return (
    <>
     <Sidebar />
      <main className='main'>
        <Timeline />
      </main>
      <Trends page="home" />
     
    </>

  );
}
export default Home;