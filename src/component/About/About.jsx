import React, { useState } from "react";
import about_img from "../../assets/about.png";
import play_icon from "../../assets/play-icon.png";
import './About.css'
import VideoPlayer from "../VideoPlayer/VideoPlayer";
const About = ({setPlayState}) => {

  return (
    <div className="about" >
      <div className="about-left">
      <img src={play_icon} alt="" className="play-icon" onClick={()=>{
        setPlayState(true);
      }}/>
        <img src={about_img} alt="" className="about-img" />
       
      </div>
      <div className="about-right">
        <h3>About University</h3>
        <h2>Nuturing Tomorrow's Leader Today</h2>
        <p>
          Chiang Mai University is at the forefront of research in Thailand,
          particularly in areas such as environmental science, agriculture, and
          health sciences. The university hosts several research centers and
          institutes that contribute significantly to both academic knowledge
          and practical solutions for regional and global challenges. For
          instance, the university's focus on sustainable agriculture and
          environmental conservation reflects the unique needs and
          characteristics of northern Thailand's ecosystem. The university has
          established strong collaborations with both national and international
          institutions, allowing for a dynamic exchange of knowledge and
          expertise. These collaborations often lead to joint research projects,
          exchange programs, and conferences, enhancing CMU's reputation on the
          global stage.
        </p>
      </div>
    </div>
  );
};

export default About;
