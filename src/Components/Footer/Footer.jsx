import React, { useRef } from "react";
import "./footer.css";
import Logo from "../../assets/logo.png";
import emailjs from '@emailjs/browser';

const Footer = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_6wuvuf2",
        "template_jthoqco",
        form.current,
        "PwCmZjRR2KRtmzUuj"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="Footer">
      <div className="mail">
        <div className="Logo">
          <img className="logo" src={Logo} alt="" />
        </div>

        <div className="Details">
          <form ref={form} className="contact__form" onSubmit={sendEmail}>
            <div className="contact__form-group">
              <div className="contact__form-div">
                <input
                  type="text"
                  name="user_name"
                  className="contact__form-input"
                  placeholder="Your Name"
                />
              </div>
              <div className="contact__form-div">
                <input
                  type="email"
                  name="user_email"
                  className="contact__form-input"
                  placeholder="Your Email"
                />
              </div>
            </div>

            <div className="contact__form-div contact__form-area">
              <textarea
                name="message"
                cols="30"
                rows="10"
                className="contact__form-input"
                placeholder="Write Your Message"
              ></textarea>
            </div>

            <button type="submit" className="btns">
              Send
            </button>
          </form>
        </div>
      </div>
      <hr className="line" />
      <div className="social">
        <h1>Social</h1>
      </div>
    </div>
  );
};

export default Footer;

