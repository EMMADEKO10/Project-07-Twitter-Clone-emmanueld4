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
      
      <main className='main'>
        <Sidebar />
        <Timeline />
        {/* <Sidebar /> */}
        <SidebarRight />
      </main>
    </>


  );
}

// function Trends(){
// return(
// <div class="trends">
{/*  */ }
{/* </div> */ }
// )
// }
// 
// function Sidebar(){
// return(
// <div className='sidebar'>
{/*  */ }
{/* </div> */ }
// )
// }

export default Home;