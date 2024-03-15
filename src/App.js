
import Tripdetails from './component/MainPage-com/Tripdetails';
import Navbar from "./Navbar"
import './Css/App.css';
import './Css/responcive.css'
import "./index.css"
import { Route, Routes } from 'react-router-dom';
import Footer from './Footer';
import Mainpage from './component/MainPage-com/Mainpage';
import Corporate from './component/Corporate-com/Corporate';
import Franchise from './component/Farnchise-com/Franchise';
import About from './component/About/About';
import Community from './component/Community/Community';
import Blogeroute from './component/Blog/Blogeroute';
import Destination from './component/Destination/Destination';
import Underconstruction from './Underconstruction';



function App() {
  return (
    <>
      
      <Navbar/>
   
      <Routes>
        <Route exact path='/' element={<Mainpage/>} />
        <Route exact path='/Corporate' element={<Corporate/>} />
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
      <Footer/>

    </>
  );
}

export default App;
