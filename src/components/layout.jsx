import React from 'react';
// import { Routes, Route, BrowserRouter } from 'react-router-dom';

function Layout({children}) {
    return (
        <>
            <div className="left-sidebar"/>
            {children}
            <div className="right-sidebar" />
        </>
    );
}

export default Layout;


{/* <BrowserRouter> */}
{/* <Header /> */}
{/* <Routes> */}
  {/* <Route path='/' element={<Home />} /> */}
  {/* <Route path='/programmes' element={<Programme />} /> */}
  {/* <Route path='/professeurs' element={<Professeur />} /> */}
  {/* <Route path='/etudiants' element={<Etudiants />} /> */}
{/* </Routes> */}
{/*  */}
{/* </BrowserRouter> */}