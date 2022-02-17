import React from "react";
import {link} from "../portfolio";
import { SocialIcon } from "react-social-icons";

import Fade from "react-reveal/Fade";

import "./cont.css";

const Cont = () => {
  return (
    <div className="contac" id="contac">
      {/* <h1 className="contact-title">
        <Fade bottom cascade duration={2500}>
          Reach Out To Me!
        </Fade>
      </h1> */}
      <div className="icons">
        {link.map((link) => (
          <div className="icons">
            {" "}
            <SocialIcon url={link}  target="_blank" />{" "}
          </div>
        ))}
      </div>

      <center>
  
        {/* <p id="emailPhone"><a href="tel:+919304163858">📞+91 :9304163858</a>  <a href="mailto:677kajal@gmail.com" target="_blank" id="email"> 📧 677kajal@gmail.com</a></p>
        <hr className="style-f" /> */}
      </center>
      {/* <p className="copyright">
        👨‍💻 with ❤️ by <b id="footName">Kajal Kumari</b> using ⚛️ 
       </p> */}
      

    </div>
  );
};

export default Cont;
