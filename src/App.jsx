import React, { useState } from "react";
import Home from "./pages/home.jsx";
import Layout from "./components/layout.jsx";
import Profil from "./pages/profil.jsx";
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import data from "./data/initial-data.json";
import('./style/reset.css');
import('./style/App.css');
import TweetsContext from "./context.js";
// ___________________________------------------------_________________________________________________________________

export default function App() {
  const [dataTweet, setDataTweets] = useState(data);
  const [filteredTweets, setFilteredTweets] = useState([]);
  const [isTweetClick, setIsTweetClick] = useState(false);
  const [isLikeClick, setIsLikeClick] = useState(false);
  const [currentAccount, setCurrentAccount] = useState(0);
  const [currentUser, setCurrentUser] = useState(0);
  const [addTweetFile, setAddTweetFile] = useState(0);
  const [isButtonTweetClick, setIsButtonTweetClick] = useState("");

  return (
    <Layout>
      <BrowserRouter>
        <TweetsContext.Provider value={{
          filteredTweets, setFilteredTweets, isTweetClick, setIsTweetClick,
          currentAccount, setCurrentAccount, currentUser, setCurrentUser, dataTweet,
          setDataTweets, isLikeClick, setIsLikeClick, addTweetFile, 
          isButtonTweetClick, setIsButtonTweetClick, setAddTweetFile }}>
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






















