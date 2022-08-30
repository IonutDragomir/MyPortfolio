import React from "react";
import { FaFacebookF, FaLinkedin, FaGithub } from "react-icons/fa";

export default function SocialMedia() {
  return (
    <div className="app__social">
      <a href="https://www.linkedin.com/in/ionut-dragomir-8a4b361b9/" target="_blank" >
        <div>
          <FaLinkedin />
        </div>
      </a>

      <a href="https://github.com/IonutDragomir" target="_blank">
        <div>
          <FaGithub />
        </div>
      </a>

      <a href="https://www.facebook.com/ionutmarian.dragomir" target="_blank">
        <div>
          <FaFacebookF />
        </div>
      </a>
    </div>
  );
}
