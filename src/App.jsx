import Home from "./pages/home.jsx";
import Layout from "./components/layout.jsx";
import Profil from "./pages/profil.jsx";
import { Routes, Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import Tweet from "./components/Tweets/Tweet.jsx";


import('./style/reset.css');
import('./style/App.css');
import('./style/style-sidebar.css')
import('./style/style-sidebar-right.css')
import('./style/Profil-Page.css')


export default function App() {
  return (
    <Layout>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/profil' element={<Profil />} />
          <Route path='/profil' element={<Tweet />} />
          
          
        </Routes>

      </BrowserRouter>
      

    </Layout>
  );
}


