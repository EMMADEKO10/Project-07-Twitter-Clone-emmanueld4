import React from 'react';
import Timeline from './../components/timeLine';
import Sidebar from '../components/sidebar';
import Trends from '../components/trends';

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