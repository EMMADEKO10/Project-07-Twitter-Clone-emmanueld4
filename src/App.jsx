import React,{useState} from "react";
import Home from "./pages/home.jsx";
import Layout from "./components/layout.jsx";
import Profil from "./pages/profil.jsx";
import { Routes, Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import('./style/reset.css');
import('./style/App.css');
import('./style/style-sidebar.css')
import('./style/style-sidebar-right.css')
import('./style/Profil-Page.css')

export default function App() {

  return (

    <Layout>
      <BrowserRouter>
        <TweetsProvider>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/profil' element={<Profil />} />
          </Routes>
        </TweetsProvider>
      </BrowserRouter>
    </Layout>
  );
}

export const TweetsContext = React.createContext({
  filteredTweets: [],
  isTweetClick: false,
  currentAccount: 0,
  currentUser: 0,
});

export function TweetsProvider({ children }) {
  const [filteredTweets, setFilteredTweets] = useState([]);
  const [isTweetClick, setIsTweetClick] = useState(false);
  const [currentAccount, setCurrentAccount] = useState(0);
  const [currentUser, setCurrentUser] = useState(0);
  return (
    <TweetsContext.Provider value={{ filteredTweets, setFilteredTweets, isTweetClick, setIsTweetClick, currentAccount, setCurrentAccount, currentUser, setCurrentUser }}>
      {children}
    </TweetsContext.Provider>
  );
}





















