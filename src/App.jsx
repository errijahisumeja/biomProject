import React from 'react'
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Screen1 from './components/Screen1/Screen1';
import Screen2 from './components/Screen2/Screen2';
import Screen3 from './components/Screen3/Screen3';
import Screen4 from './components/Screen4/Screen4';
import Screen5 from './components/Screen5/Screen5';
import VideoScreen from './components/VideoScreen/VideoScreen';
import Gallery from './components/Gallery/Gallery';
import Footer from './components/Footer/Footer';

const App = () => {
  return <div>

    <Navbar/>
    <Hero/>
    <Screen1/>
    <Screen2/>
    <Screen3/>
    <Screen4/>
    <Screen5/>
    <VideoScreen/>
    <Gallery/>
    <Footer/>
  </div>;
}

export default App