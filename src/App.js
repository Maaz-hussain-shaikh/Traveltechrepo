import React from 'react';
import Tripdetails from './component/MainPage-com/Tripdetails';
import Navbar from "./Navbar"
import './Css/App.css';
import './Css/responcive.css'
import "./index.css"
import { Suspense, lazy } from 'react';
import Loader from './Loader';
import { Route, Routes } from 'react-router-dom';
import Footer from './Footer';
import Mainpage from './component/MainPage-com/Mainpage';

const Franchise = lazy(() => import('./component/Farnchise-com/Franchise'));
const About = lazy(() => import('./component/About/About'));
const Community = lazy(() => import('./component/Community/Community'));
const Blogeroute = lazy(() => import('./component/Blog/Blogeroute'));
const Destination = lazy(() => import('./component/Destination/Destination'));
const Underconstruction = lazy(() => import('./Underconstruction'));
const Corporate= React.lazy(()=>import('./component/Corporate-com/Corporate'))

function App() {
  return (
    <>
      
      <Navbar/>
   <Suspense fallback={<Loader/>}>
   <Routes>
        <Route exact path='/' element={<Mainpage/>} />
        <Route exact path='/Corporate' element={<Corporate/>} />
        {/* <Route exact path='/holitrips' element={<Maincom/>} /> */}
        <Route exact path='/About' element={<About/>} />
        <Route exact path='/Community' element={<Community/>} />
        <Route exact path='/Franchise' element={<Franchise/>} />
        <Route exact path='/Travelshop' element={<Underconstruction/>} />
        <Route exact path='/Destinations/:name' element={<Destination/>} />
        <Route path='/Details/:info' element={<Tripdetails/>} />
        <Route exact path='/Bloge' element={<Underconstruction/>} />
        <Route exact path='/Blog/:content' element={<Blogeroute/>} />
        <Route exact path='/Artist' element={<Underconstruction/>} />
        <Route exact path='/ourGroup' element={<Underconstruction/>} />
        
        
      </Routes>
   </Suspense>
      
      <Footer/>

    </>
  );
}

export default App;
