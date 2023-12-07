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











