import React, { useState } from "react";
import Home from "./pages/home.jsx";
import Layout from "./components/layout.jsx";
import Profil from "./pages/profil.jsx";
import { Routes, Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import { dataTweets } from "./Data-tweet/dataTweet.js";
import data from "./data/initial-data.json";
import('./style/reset.css');
import('./style/App.css');
import('./style/style-sidebar.css')
import('./style/style-sidebar-right.css')
import('./style/Profil-Page.css')
import TweetsContext from "./context.js";


export default function App() {
  const [dataTweet, setDataTweets] = useState(data);
  const [filteredTweets, setFilteredTweets] = useState([]);
  const [isTweetClick, setIsTweetClick] = useState(false);
  const [isLikeClick, setIsLikeClick] = useState(false);
  const [currentAccount, setCurrentAccount] = useState(0);
  const [currentUser, setCurrentUser] = useState(0);
  const [numberLike, setNumberLike] = useState(0);
  console.log(dataTweet)

  return (
    <Layout>
      <BrowserRouter>
        <TweetsContext.Provider value={{
          filteredTweets, setFilteredTweets, isTweetClick, setIsTweetClick,
          currentAccount, setCurrentAccount, currentUser, setCurrentUser, dataTweet,
          setDataTweets, isLikeClick, setIsLikeClick, numberLike, setNumberLike, }}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/profil/:id' element={<Profil />} />
          </Routes>
        </TweetsContext.Provider>
      </BrowserRouter>
    </Layout>
  );
}

// --------------------------------------------------------------------------------------






















