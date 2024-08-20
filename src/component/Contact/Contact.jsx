import React from "react";
import "./Contact.css";
import msg_icon from '../../assets/msg-icon.png';
import mail_icon from '../../assets/mail-icon.png';
import phone_icon from '../../assets/phone-icon.png';
import location_icon from '../../assets/location-icon.png';
import white_arrow from "../../assets/white-arrow.png"
const Contact = () => {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "d608d0aa-be36-40b3-aa59-b597b0cc03b7");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Email is send successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };
  return (
    <div className="contact">
      <div className="contact-col">
        <h3>Send us a Message <img src={msg_icon} alt=""/></h3>
        <p>
          It's very easy to get in touch with us. Just use the contact form or
          pay us a visit for a coffee at the office.It's very easy to get in touch with us. Just use the contact form or
          pay us a visit for a coffee at the office.
        </p>
        <ul>
            <li><img src={mail_icon} alt=""/>Contact@gmail.com</li>
            <li><img src={phone_icon} alt=""/>+88 01714476086</li>
            <li><img src={location_icon} alt=""/><p>House: 13/3, Road-2,<br/>
            Shyamoli, Dhaka 1207</p></li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
            <label>Your Name</label>
            <input type="text" name="name" placeholder="John Doe" required/>
            <label>Your Number</label>
            <input type="tel" name="number" placeholder="+88 01714476086" required/>
            <label>Write Your Message</label>
            <textarea name="message" rows="6" placeholder="Enter your Message" required/>
            <button type="submit" className="btn dark-btn">Submit Now<img src={white_arrow} alt=""/></button>
            <span>{result}</span>
        </form>
      </div>
    </div>
  );
};

export default Contact;
