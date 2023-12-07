import React from 'react';
import Timeline from './../components/timeLine';
// import Navigation from '../components/Composant_Sidebar/trends';
import Sidebar from '../components/Composant_Sidebar/sidebar';
// import Trends
// import { Sidebar } from '../components/Composant_Sidebar/sidebar';
import SidebarRight from '../components/Composant_Sidebar/sidebar_right';

function Home() {
  return (
    <>
     <Sidebar />
      <main className='main'>
      
        <Timeline />
       
      </main>
      <SidebarRight />
     
    </>


  );
}


export default Home;