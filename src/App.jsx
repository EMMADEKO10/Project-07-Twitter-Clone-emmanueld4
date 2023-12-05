import Home from "./pages/home.jsx";
import Layout from "./components/layout.jsx";
import Profil from "./pages/profil.jsx";
// import Profil from "./pages/profil.jsx";
// import { Routes, Route, BrowserRouter } from 'react-router-dom';
// import { BrowserRouter, Route, Switch } from 'react-router-dom'; 
// import LoginPage from './pages/loginpage.jsx'
// import RegisterPage from './pages/registerpage.jsx'


import('./style/reset.css');
import('./style/App.css');
import('./style/style-sidebar.css')
import('./style/style-sidebar-right.css')


export default function App() {
  return (
    <Layout>
      {/* <BrowserRouter> */}
        {/* <Routes> */}
        {/* <Route path='/' element={<Home />} />  */}
        <Home />
        {/* <Profil /> */}
        {/* <Route path='/profil' element={<Profil />} /> */}
        {/* </Routes> */}
      {/* // </BrowserRouter> */}
      {/* <Home /> */}

    </Layout>
  );
}



{/* <BrowserRouter> */ }
{/* <Header /> */ }
{/* <Routes> */ }
{/* <Route path='/' element={<Home />} /> */ }
{/* <Route path='/programmes' element={<Programme />} /> */ }
{/* <Route path='/professeurs' element={<Professeur />} /> */ }
{/* <Route path='/etudiants' element={<Etudiants />} /> */ }
{/* </Routes> */ }
{/*  */ }
{/* </BrowserRouter> */ }