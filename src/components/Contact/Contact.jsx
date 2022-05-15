import React, { useRef } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";
import "react-notifications/lib/notifications.css";
import { FaGithubSquare } from "react-icons/fa";
import { RiMessengerFill } from "react-icons/ri";
import { SiGmail } from "react-icons/si";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_7ooj9bf",
        "template_gyft0cs",
        form.current,
        "k6ACpULFWBqSYiSrv"
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
    <div className="contact" id="contact">
      <p>Contact</p>
      <div className="links">
        {/* messanger git hub mail */}
        <a href="https://github.com/iwillchangelater" target={"_blank"}>
          <div className="item">
            <FaGithubSquare size={40} className="icon" />
            <p> GITHUB</p>
          </div>
        </a>
        <a href="https://m.me/jagaabnoo" target={"_blank"}>
          <div className="item">
            <RiMessengerFill size={40} className="icon" color="#429ae8" />{" "}
            <p>MESSENGER </p>
          </div>
        </a>
        <a href="mailto:lkhagvasurenjarglasaikhan@gmail.com" target={"_blank"}>
          <div className="item">
            <SiGmail size={40} className="icon" />
            <p>EMAIL </p>
          </div>
        </a>
      </div>

      <form ref={form} onSubmit={sendEmail}>
        <hr />
        <div className="input">
          <p>Name</p>
          <input type="text" name="name" id="" />
        </div>
        <div className="input">
          <p>Email</p>
          <input type="text" name="email" id="" />
        </div>
        <div className="input">
          <p>Messege </p>
          <textarea name="messege" id="" />
        </div>
        <button type="submit" className="btn btn-submit">
          Send{" "}
        </button>
      </form>
    </div>
  );
}

export default Contact;
