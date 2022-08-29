import React from "react";
import { BsTwitter, BsInstagram } from "react-icons/bs";
import { FaFacebookF, FaLinkedin, FaGithub } from "react-icons/fa";

export default function SocialMedia() {
  return (
    <div className="app__social">
      <div>
        <FaLinkedin />
      </div>

      <div>
        <FaGithub />
      </div>

      <div>
        <FaFacebookF />
      </div>
    </div>
  );
}
