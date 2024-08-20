import React, { useRef } from "react";
import "./Testimonial.css";
import next_icon from "../../assets/next-icon.png";
import back_icon from "../../assets/back-icon.png";
import user_1 from "../../assets/user-1.png";
import user_2 from "../../assets/user-2.png";
import user_3 from "../../assets/user-3.png";
import user_4 from "../../assets/user-4.png";
const Testimonial = () => {
    const slider=useRef();
    let tx=0;
    const slideForward =()=>{
        if(tx>-50){
            tx-=25;
        }
        slider.current.style.transform=`translateX(${tx}%)`
    }
    const slideBackward=()=>{
        if(tx<0){
            tx+=25;
        }
        slider.current.style.transform=`translateX(${tx}%)`
    }
   
  return (
    <div className="testimonial">
      <img src={next_icon} alt="" className="next-btn" onClick={slideForward} />
      <img src={back_icon} alt="" className="back-btn" onClick={slideBackward} />
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="userInfo">
                <img src={user_1} alt="" />
                <div>
                  <h3>Willium nasir</h3>
                  <span>aamra technologies</span>
                </div>
              </div>
              <p>
                * Network and connectivity: The bandwidth supported by the
                device may vary by region or network provider. Battery: Actual
                battery life may vary depending on network environment, features
                and apps used, frequency of calls and messages, number of times
                the battery has been charged, and many other factors. Usable
                memory: Actual usable memory varies depending on the operator
                and may change after software upgrade.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="userInfo">
                <img src={user_2} alt="" />
                <div>
                  <h3>Willium nasir</h3>
                  <span>aamra technologies</span>
                </div>
              </div>
              <p>
                * Network and connectivity: The bandwidth supported by the
                device may vary by region or network provider. Battery: Actual
                battery life may vary depending on network environment, features
                and apps used, frequency of calls and messages, number of times
                the battery has been charged, and many other factors. Usable
                memory: Actual usable memory varies depending on the operator
                and may change after software upgrade.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="userInfo">
                <img src={user_3} alt="" />
                <div>
                  <h3>Willium nasir</h3>
                  <span>aamra technologies</span>
                </div>
              </div>
              <p>
                * Network and connectivity: The bandwidth supported by the
                device may vary by region or network provider. Battery: Actual
                battery life may vary depending on network environment, features
                and apps used, frequency of calls and messages, number of times
                the battery has been charged, and many other factors. Usable
                memory: Actual usable memory varies depending on the operator
                and may change after software upgrade.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="userInfo">
                <img src={user_4} alt="" />
                <div>
                  <h3>Willium nasir</h3>
                  <span>aamra technologies</span>
                </div>
              </div>
              <p>
                * Network and connectivity: The bandwidth supported by the
                device may vary by region or network provider. Battery: Actual
                battery life may vary depending on network environment, features
                and apps used, frequency of calls and messages, number of times
                the battery has been charged, and many other factors. Usable
                memory: Actual usable memory varies depending on the operator
                and may change after software upgrade.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Testimonial;
