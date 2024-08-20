import React, { useState } from "react";
import Navbar from "./component/navbar/Navbar";
import Hero from "./component/Hero/Hero";
import Programe from "./component/Programe/Programe";
import Title from "./component/Title/Title";
import About from "./component/About/about";
import Campus from "./component/Campus/Campus";
import Testimonial from "./component/Testimonial/Testimonial";
import Contact from "./component/Contact/Contact";
import Footer from "./component/Footer/Footer";
import VideoPlayer from "./component/VideoPlayer/VideoPlayer";

const App = () => {
  const [playState,setPlayState]=useState(false);
 
  return (
    <div>
      <Navbar />
      <Hero />

      <div className="container">
        <Title subTitle='Our Program' title='What we Offer'/>
        <Programe />
        <About setPlayState={setPlayState}/>
        <Title subTitle='Gallery' title='Campus Photos'/>
        <Campus />
        <Title subTitle='Tesimonial' title='What Student Say'/>
        <Testimonial/>
        <Title subTitle='Contact' title='Contact with us'/>
        <Contact/>
        <Footer/>
        <VideoPlayer playState={playState} setPlayState={setPlayState}/>
      </div>
    
    
    </div>
  );
};

export default App;
